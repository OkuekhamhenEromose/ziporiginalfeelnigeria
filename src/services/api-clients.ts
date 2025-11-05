import axios from "axios";

// Create an Axios instance pointing directly to your Render backend
const apiClient = axios.create({
  baseURL: "https://chfeelnigeriabackend.onrender.com", // Render backend URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

// Optional: Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log("🚀 Making request to:", (config.baseURL ?? '') + config.url);
    return config;
  },
  (error) => {
    console.error("❌ Request error:", error);
    return Promise.reject(error);
  }
);

// Optional: Response interceptor for logging
apiClient.interceptors.response.use(
  (response) => {
    console.log("✅ Response received:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error("❌ Response error details:", {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
    });
    return Promise.reject(error);
  }
);

export default apiClient;
