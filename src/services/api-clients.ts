import axios from "axios";

// Create an Axios instance pointing directly to your Render backend
const apiClient = axios.create({
  baseURL: "https://chfeelnigeriabackend.onrender.com/", // Render backend URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

// Enhanced Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    const fullUrl = `${config.baseURL ?? ""}${config.url ?? ""}`;
    console.log("🚀 Making request to FULL URL:", fullUrl);
    console.log("📋 Request method:", config.method?.toUpperCase());
    console.log("📦 Request data:", config.data);
    return config;
  },
  (error) => {
    console.error("❌ Request error:", error);
    return Promise.reject(error);
  }
);

// Enhanced Response interceptor for logging
apiClient.interceptors.response.use(
  (response) => {
    console.log("✅ Response received:", {
      status: response.status,
      statusText: response.statusText,
      data: response.data,
      headers: response.headers
    });
    return response;
  },
  (error) => {
    console.error("❌ FULL RESPONSE ERROR:", {
      message: error.message,
      code: error.code,
      config: {
        url: `${error.config?.baseURL ?? ""}${error.config?.url ?? ""}`,
        method: error.config?.method,
        data: error.config?.data
      },
      response: {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        headers: error.response?.headers
      }
    });
    return Promise.reject(error);
  }
);

export default apiClient;