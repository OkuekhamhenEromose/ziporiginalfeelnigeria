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
  phone: string; // Changed from Phone to phone
}

export interface TourismExchangeResponse {
  id?: string;
  message?: string;
  email?: string;
  application_id?: string;
  profile_id?: string; // Added this field
  error?: string;
}

export const tourismExchangeService = {
  // Register user for tourism exchange
  register: async (formData: FormData): Promise<TourismExchangeResponse> => {
    try {
      const response = await tourismExchangeAPI.post<TourismExchangeResponse>(
        '/api/user/register/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          timeout: 30000, // Longer timeout for file uploads
        }
      );
      return response.data;
    } catch (error: any) {
      console.error('Registration error:', error);
      
      // Handle specific error cases
      if (error.response?.data) {
        const errorData = error.response.data;
        if (errorData.details) {
          // Fix the TypeScript error by properly typing the errors
          const errors: unknown[] = Object.values(errorData.details).flat() as unknown[];
          const firstError = errors[0];
          throw new Error(Array.isArray(firstError) ? firstError[0] : String(firstError));
        }
        throw new Error(errorData.message || errorData.error || 'Registration failed');
      }
      if (error.code === 'ERR_NETWORK') {
        throw new Error('Network error: Unable to connect to server');
      }
      if (error.message) {
        throw new Error(error.message);
      }
      throw new Error('Network error: Unable to connect to registration service');
    }
  },

  // Submit quiz results
  submitQuiz: async (email: string, answers: number[], timeTaken: number) => {
    const response = await tourismExchangeAPI.post('/api/game/submit/', {
      email,
      answers,
      time_taken: timeTaken,
    });
    return response.data;
  },

  // Get quiz questions
  getQuizQuestions: async () => {
    const response = await tourismExchangeAPI.get('/api/game/questions/');
    return response.data;
  }
};