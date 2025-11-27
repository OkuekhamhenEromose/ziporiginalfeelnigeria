// tourism-exchange-service.ts - Updated with authentication
import tourismExchangeAPI from './tourism-exchange-api';

export interface TourismExchangeRegistrationData {
  email: string;
  password: string;
  password1: string;
  full_name: string;
  agreed_to_terms: boolean;
  gender: string;
  location: string;
  motivation: string;
  profile_pix: File;
  screen_shoot: File;
  phone: string;
}

export interface TourismExchangeResponse {
  id?: string;
  message?: string;
  email?: string;
  application_id?: string;
  profile_id?: string;
  user_id?: string;
  error?: string;
  details?: any;
  token?: string; // Add token for authentication
  access?: string;
  refresh?: string;
}

export interface QuizQuestion {
  id: number;
  question_text: string;
  category: string;
  options: string[];
}

export interface QuizSubmissionResponse {
  message: string;
  score: number;
  correct_answers?: number;
  completed: boolean;
}

// Store authentication token
let authToken: string | null = null;

export const setAuthToken = (token: string) => {
  authToken = token;
  tourismExchangeAPI.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  authToken = null;
  delete tourismExchangeAPI.defaults.headers.common['Authorization'];
};

export const tourismExchangeService = {
  // Register user for tourism exchange
  register: async (formData: FormData): Promise<TourismExchangeResponse> => {
    try {
      console.log('Making registration request with form data...');
      
      const response = await tourismExchangeAPI.post<TourismExchangeResponse>(
        '/api/user/register/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          timeout: 30000,
        }
      );
      
      console.log('Registration successful:', response.data);
      
      // Store authentication token if provided
      if (response.data.token) {
        setAuthToken(response.data.token);
      } else if (response.data.access) {
        setAuthToken(response.data.access);
      }
      
      return response.data;
    } catch (error: any) {
      console.error('Registration error details:', error);
      
      // Enhanced error handling with detailed logging
      if (error.response?.data) {
        const errorData = error.response.data;
        console.error('Backend error response:', errorData);
        
        if (errorData.details) {
          // Handle validation errors
          const errors: unknown[] = Object.values(errorData.details).flat() as unknown[];
          const firstError = errors[0];
          const errorMessage = Array.isArray(firstError) ? String(firstError[0]) : String(firstError);
          console.error('Validation error:', errorMessage);
          throw new Error(errorMessage);
        }
        
        if (errorData.error) {
          throw new Error(errorData.error);
        }
        
        if (errorData.message) {
          throw new Error(errorData.message);
        }
        
        // If we have details object but no specific error format
        if (typeof errorData === 'object') {
          const firstError = Object.values(errorData)[0];
          if (firstError) {
            const errorMessage = Array.isArray(firstError) ? String(firstError[0]) : String(firstError);
            throw new Error(errorMessage);
          }
        }
        
        throw new Error('Registration failed: ' + JSON.stringify(errorData));
      }
      
      if (error.code === 'ERR_NETWORK') {
        throw new Error('Network error: Unable to connect to server. Please check your internet connection.');
      }
      
      if (error.message) {
        throw new Error(error.message);
      }
      
      throw new Error('An unexpected error occurred during registration');
    }
  },

  // Login user to get authentication token
  login: async (email: string, password: string): Promise<TourismExchangeResponse> => {
    try {
      const response = await tourismExchangeAPI.post<TourismExchangeResponse>('/api/user/login/', {
        email,
        password,
      });
      
      if (response.data.token) {
        setAuthToken(response.data.token);
      } else if (response.data.access) {
        setAuthToken(response.data.access);
      }
      
      return response.data;
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  // Get quiz questions with authentication
  getQuizQuestions: async (): Promise<{ questions: QuizQuestion[] }> => {
    try {
      if (!authToken) {
        throw new Error('Authentication required. Please login first.');
      }

      const response = await tourismExchangeAPI.get<{ questions: QuizQuestion[] }>('/api/game/questions/');
      return response.data;
    } catch (error: any) {
      console.error('Error fetching questions:', error);
      
      if (error.response?.status === 401) {
        throw new Error('Authentication failed. Please login again.');
      }
      
      if (error.response?.status === 404) {
        throw new Error('Quiz questions not found. Please try again later.');
      }
      
      throw new Error(error.response?.data?.message || 'Failed to fetch quiz questions');
    }
  },

  // Start quiz (if your backend has this endpoint)
  startQuiz: async (category: string = 'general'): Promise<any> => {
    try {
      if (!authToken) {
        throw new Error('Authentication required. Please login first.');
      }

      const response = await tourismExchangeAPI.post(`/api/game/start/${category}/`);
      return response.data;
    } catch (error: any) {
      console.error('Error starting quiz:', error);
      throw new Error(error.response?.data?.message || 'Failed to start quiz');
    }
  },

  // Submit quiz with authentication
  submitQuiz: async (email: string, answers: number[], timeTaken: number): Promise<QuizSubmissionResponse> => {
    try {
      if (!authToken) {
        throw new Error('Authentication required. Please login first.');
      }

      const response = await tourismExchangeAPI.post<QuizSubmissionResponse>('/api/game/submit/', {
        email,
        answers,
        time_taken: timeTaken,
      });
      
      return response.data;
    } catch (error: any) {
      console.error('Error submitting quiz:', error);
      
      if (error.response?.status === 401) {
        throw new Error('Authentication failed. Please login again.');
      }
      
      throw new Error(error.response?.data?.message || 'Failed to submit quiz');
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!authToken;
  },

  // Get current auth token
  getAuthToken: (): string | null => {
    return authToken;
  }
};