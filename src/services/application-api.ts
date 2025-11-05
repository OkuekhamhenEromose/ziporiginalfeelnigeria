// services/application-api.ts
import apiClient from './api-clients';
import { 
  PersonalDetails, 
  TravelVisaInfo, 
  BackgroundMotivation, 
//   MediaSocial, 
  BVNInfo,
  ApplicationResponse 
} from '../types/application';

export const applicationAPI = {
  // Step 1: Create application and get ID
  createStep1: async (data: PersonalDetails): Promise<{ id: string }> => {
    const response = await apiClient.post<{ id: string }>('api/apps/step1/', data);
    return response.data;
  },

  // Step 2: Update application
  updateStep2: async (id: string, data: TravelVisaInfo): Promise<ApplicationResponse> => {
    const response = await apiClient.put<ApplicationResponse>(`api/apps/step2/${id}/`, data);
    return response.data;
  },

  // Step 3: Update application
  updateStep3: async (id: string, data: BackgroundMotivation): Promise<ApplicationResponse> => {
    const response = await apiClient.put<ApplicationResponse>(`api/apps/step3/${id}/`, data);
    return response.data;
  },

  // Step 4: Update application with file upload
  updateStep4: async (id: string, data: FormData): Promise<ApplicationResponse> => {
    const response = await apiClient.put<ApplicationResponse>(
      `api/apps/step4/${id}/`, 
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  },

  // BVN Update
  updateBVN: async (id: string, data: BVNInfo): Promise<ApplicationResponse> => {
    const response = await apiClient.put<ApplicationResponse>(`api/apps/bvn/${id}/`, data);
    return response.data;
  },

  // Review application
  getReview: async (id: string) => {
    const response = await apiClient.get(`api/apps/review/${id}/`);
    return response.data;
  },

  // Submit application
  submitApplication: async (id: string): Promise<ApplicationResponse> => {
    const response = await apiClient.put<ApplicationResponse>(`api/apps/submit/${id}/`, {});
    return response.data;
  },
};