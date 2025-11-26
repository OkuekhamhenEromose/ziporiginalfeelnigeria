// tourism-exchange-service.ts - Enhanced error handling
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
}

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

  // ... other methods remain the same
  submitQuiz: async (email: string, answers: number[], timeTaken: number) => {
    const response = await tourismExchangeAPI.post('/api/game/submit/', {
      email,
      answers,
      time_taken: timeTaken,
    });
    return response.data;
  },

  getQuizQuestions: async () => {
    const response = await tourismExchangeAPI.get('/api/game/questions/');
    return response.data;
  }
};