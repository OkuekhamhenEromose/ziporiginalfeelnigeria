// hooks/useApplication.ts
import { useState } from 'react';
import { applicationAPI } from '../services/application-api';
import { ApplicationData } from '../types/application';

export const useApplication = () => {
  const [applicationId, setApplicationId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Clear any existing errors
  const clearError = () => setError('');

  const saveStep1 = async (data: ApplicationData['step1']) => {
    setLoading(true);
    clearError();
    try {
      console.log('📤 Saving step 1 (Personal Details):', data);
      const response = await applicationAPI.createStep1(data);
      setApplicationId(response.id);
      console.log('✅ Step 1 saved successfully. Application ID:', response.id);
      return response;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 
                         err.response?.data?.detail || 
                         JSON.stringify(err.response?.data) || 
                         'Failed to save personal details';
      console.error('❌ Step 1 save failed:', errorMessage);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const saveStep2 = async (data: ApplicationData['step2']) => {
    if (!applicationId) {
      const errorMsg = 'No application ID found. Please complete step 1 first.';
      setError(errorMsg);
      throw new Error(errorMsg);
    }
    
    setLoading(true);
    clearError();
    try {
      console.log('📤 Saving step 2 (Travel & Visa):', data);
      const response = await applicationAPI.updateStep2(applicationId, data);
      console.log('✅ Step 2 saved successfully:', response);
      return response;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 
                         err.response?.data?.detail || 
                         JSON.stringify(err.response?.data) || 
                         'Failed to save travel information';
      console.error('❌ Step 2 save failed:', errorMessage);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const saveStep3 = async (data: ApplicationData['step3']) => {
    if (!applicationId) {
      const errorMsg = 'No application ID found. Please complete step 1 first.';
      setError(errorMsg);
      throw new Error(errorMsg);
    }
    
    setLoading(true);
    clearError();
    try {
      console.log('📤 Saving step 3 (Background & Motivation):', data);
      const response = await applicationAPI.updateStep3(applicationId, data);
      console.log('✅ Step 3 saved successfully:', response);
      return response;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 
                         err.response?.data?.detail || 
                         JSON.stringify(err.response?.data) || 
                         'Failed to save background information';
      console.error('❌ Step 3 save failed:', errorMessage);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const saveStep4 = async (data: ApplicationData['step4']) => {
    if (!applicationId) {
      const errorMsg = 'No application ID found. Please complete step 1 first.';
      setError(errorMsg);
      throw new Error(errorMsg);
    }
    
    setLoading(true);
    clearError();
    try {
      console.log('📤 Saving step 4 (Media & Social):', data);
      
      const formData = new FormData();
      
      // Append social media links
      if (data.instagram) formData.append('instagram', data.instagram);
      if (data.tiktok) formData.append('tiktok', data.tiktok);
      if (data.youtube) formData.append('youtube', data.youtube);
      
      // Append video file if exists
      if (data.intro_video) {
        formData.append('intro_video', data.intro_video);
      }
      
      const response = await applicationAPI.updateStep4(applicationId, formData);
      console.log('✅ Step 4 saved successfully:', response);
      return response;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 
                         err.response?.data?.detail || 
                         JSON.stringify(err.response?.data) || 
                         'Failed to save media information';
      console.error('❌ Step 4 save failed:', errorMessage);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const saveBVN = async (data: ApplicationData['bvn']) => {
    if (!applicationId) {
      const errorMsg = 'No application ID found. Please complete step 1 first.';
      setError(errorMsg);
      throw new Error(errorMsg);
    }
    
    setLoading(true);
    clearError();
    try {
      console.log('📤 Saving BVN information:', data);
      const response = await applicationAPI.updateBVN(applicationId, data);
      console.log('✅ BVN information saved successfully:', response);
      return response;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 
                         err.response?.data?.detail || 
                         JSON.stringify(err.response?.data) || 
                         'Failed to save BVN information';
      console.error('❌ BVN save failed:', errorMessage);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const submitApplication = async () => {
    if (!applicationId) {
      const errorMsg = 'No application ID found. Please complete all steps first.';
      setError(errorMsg);
      throw new Error(errorMsg);
    }
    
    setLoading(true);
    clearError();
    try {
      console.log('📤 Submitting application:', applicationId);
      const response = await applicationAPI.submitApplication(applicationId);
      console.log('✅ Application submitted successfully:', response);
      return response;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 
                         err.response?.data?.detail || 
                         JSON.stringify(err.response?.data) || 
                         'Failed to submit application';
      console.error('❌ Application submission failed:', errorMessage);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get application details for review
  const getApplication = async () => {
    if (!applicationId) {
      throw new Error('No application ID found');
    }
    
    setLoading(true);
    clearError();
    try {
      console.log('📤 Fetching application details:', applicationId);
      const response = await applicationAPI.getApplication(applicationId);
      console.log('✅ Application details fetched:', response);
      return response;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 
                         err.response?.data?.detail || 
                         JSON.stringify(err.response?.data) || 
                         'Failed to fetch application details';
      console.error('❌ Failed to fetch application:', errorMessage);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Reset the entire application
  const resetApplication = () => {
    setApplicationId('');
    setError('');
    setLoading(false);
  };

  return {
    applicationId,
    setApplicationId,
    loading,
    error,
    clearError,
    resetApplication,
    saveStep1,
    saveStep2,
    saveStep3,
    saveStep4,
    saveBVN,
    submitApplication,
    getApplication,
  };
};