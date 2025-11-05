// hooks/useApplication.ts
import { useState } from 'react';
import { applicationAPI } from '../services/application-api';
import { ApplicationData } from '../types/application';

export const useApplication = () => {
  const [applicationId, setApplicationId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const saveStep1 = async (data: ApplicationData['step1']) => {
    setLoading(true);
    setError('');
    try {
      const response = await applicationAPI.createStep1(data);
      setApplicationId(response.id);
      return response;
    } catch (err: any) {
      setError(err.response?.data || 'Failed to save personal details');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const saveStep2 = async (data: ApplicationData['step2']) => {
    if (!applicationId) throw new Error('No application ID found');
    
    setLoading(true);
    setError('');
    try {
      return await applicationAPI.updateStep2(applicationId, data);
    } catch (err: any) {
      setError(err.response?.data || 'Failed to save travel information');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const saveStep3 = async (data: ApplicationData['step3']) => {
    if (!applicationId) throw new Error('No application ID found');
    
    setLoading(true);
    setError('');
    try {
      return await applicationAPI.updateStep3(applicationId, data);
    } catch (err: any) {
      setError(err.response?.data || 'Failed to save background information');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const saveStep4 = async (data: ApplicationData['step4']) => {
    if (!applicationId) throw new Error('No application ID found');
    
    setLoading(true);
    setError('');
    try {
      const formData = new FormData();
      
      // Append social media links
      if (data.instagram) formData.append('instagram', data.instagram);
      if (data.tiktok) formData.append('tiktok', data.tiktok);
      if (data.youtube) formData.append('youtube', data.youtube);
      
      // Append video file
      if (data.intro_video) {
        formData.append('intro_video', data.intro_video);
      }
      
      return await applicationAPI.updateStep4(applicationId, formData);
    } catch (err: any) {
      setError(err.response?.data || 'Failed to save media information');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const submitApplication = async () => {
    if (!applicationId) throw new Error('No application ID found');
    
    setLoading(true);
    setError('');
    try {
      return await applicationAPI.submitApplication(applicationId);
    } catch (err: any) {
      setError(err.response?.data || 'Failed to submit application');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    applicationId,
    setApplicationId,
    loading,
    error,
    saveStep1,
    saveStep2,
    saveStep3,
    saveStep4,
    submitApplication,
  };
};