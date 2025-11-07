import apiClient from "../services/api-clients";
import { AxiosRequestConfig } from "axios";
import { useState } from "react";

const usePostData = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const createData = async (payload: T, requestConfig?: AxiosRequestConfig) => {
    setLoading(true);
    setError("");
    
    try {
      const res = await apiClient.post<T>(endpoint, payload, requestConfig);
      setData(res.data);
      return res.data;
    } catch (err: any) {
      const errorMessage = err.response?.data || err.message || "Request failed";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    isLoading,
    createData,
  };
};

export default usePostData;