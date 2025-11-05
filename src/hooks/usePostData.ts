import apiClient from "../services/api-clients";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useState } from "react";

const usePostData = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const createData = async (payload: T, requestConfig?: AxiosRequestConfig) => {
    const abortController = new AbortController();

    setLoading(true);
    setError("");
    try {
      console.log("🚀 Sending request to endpoint:", endpoint);
      console.log("📦 Payload:", JSON.stringify(payload, null, 2));
      
      const res = await apiClient.post<T>(endpoint, payload, {
        signal: abortController.signal,
        ...requestConfig,
      });
      
      setData(res.data);
      console.log("✅ SUCCESS - Response:", res.data);
      return res.data;
      
    } catch (err: any) {
      if (err instanceof CanceledError) {
        console.log("Request was canceled");
        return;
      }
      
      // Enhanced error logging
      console.error("❌ FULL ERROR OBJECT:", err);
      console.error("❌ ERROR CODE:", err.code);
      console.error("❌ ERROR MESSAGE:", err.message);
      console.error("❌ ERROR CONFIG:", err.config);
      
      if (err.response) {
        console.error("❌ RESPONSE STATUS:", err.response.status);
        console.error("❌ RESPONSE DATA:", err.response.data);
        console.error("❌ RESPONSE HEADERS:", err.response.headers);
        
        if (err.response.data) {
          const backendError = err.response.data;
          let errorMessage = "Registration failed: ";
          
          if (typeof backendError === 'object') {
            const errors = Object.entries(backendError)
              .map(([key, value]) => {
                if (Array.isArray(value)) {
                  return `${key}: ${value.join(', ')}`;
                }
                return `${key}: ${value}`;
              })
              .join('\n');
            errorMessage += errors;
          } else {
            errorMessage += backendError.toString();
          }
          setError(errorMessage);
        } else {
          setError(`Server error: ${err.response.status} - ${err.response.statusText}`);
        }
      } else if (err.request) {
        console.error("❌ NO RESPONSE RECEIVED - Request details:", err.request);
        setError("Network error: No response received from server. The server may be down or there's a CORS issue.");
      } else {
        setError(err.message || "Unknown error occurred");
      }
      
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