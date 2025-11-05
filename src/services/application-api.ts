// services/application-api.ts
import apiClient from './api-clients';
import { 
  PersonalDetails, 
  TravelVisaInfo, 
  BackgroundMotivation, 
  BVNInfo,
  ApplicationResponse 
} from '../types/application';

export const applicationAPI = {
  // Step 1: Create application and get ID
  createStep1: async (data: PersonalDetails): Promise<{ id: string }> => {
    const response = await apiClient.post<{ id: string }>('/api/apps/application/', data);
    return response.data;
  },

  // Step 2: Update travel and visa information
  updateStep2: async (id: string, data: TravelVisaInfo): Promise<ApplicationResponse> => {
    const response = await apiClient.patch<ApplicationResponse>(`/api/apps/application/${id}/`, {
      travel_visa_info: data
    });
    return response.data;
  },

  // Step 3: Update background and motivation
  updateStep3: async (id: string, data: BackgroundMotivation): Promise<ApplicationResponse> => {
    const response = await apiClient.patch<ApplicationResponse>(`/api/apps/application/${id}/`, {
      background_motivation: data
    });
    return response.data;
  },

  // Step 4: Update media and social links with file upload
  updateStep4: async (id: string, formData: FormData): Promise<ApplicationResponse> => {
    const response = await apiClient.patch<ApplicationResponse>(
      `/api/apps/application/${id}/`, 
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  },

  // Update BVN information
  updateBVN: async (id: string, data: BVNInfo): Promise<ApplicationResponse> => {
    const response = await apiClient.patch<ApplicationResponse>(`/api/apps/application/${id}/`, {
      bvn_info: data
    });
    return response.data;
  },

  // Get application details for review
  getApplication: async (id: string): Promise<ApplicationResponse> => {
    const response = await apiClient.get<ApplicationResponse>(`/api/apps/application/${id}/`);
    return response.data;
  },

  // Submit application
  submitApplication: async (id: string): Promise<ApplicationResponse> => {
    const response = await apiClient.post<ApplicationResponse>(`/api/apps/application/${id}/submit/`, {});
    return response.data;
  },

  // Get all user applications
  getUserApplications: async () => {
    const response = await apiClient.get('/api/apps/applications/');
    return response.data;
  },

  // Check application status
  getApplicationStatus: async (id: string) => {
    const response = await apiClient.get(`/api/apps/application/${id}/status/`);
    return response.data;
  }
};