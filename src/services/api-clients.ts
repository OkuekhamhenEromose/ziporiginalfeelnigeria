import axios from "axios";

// Create an Axios instance with optimized settings
const apiClient = axios.create({
  baseURL: "https://chfeelnigeriabackend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 8000, // Reduced from 30000ms to 8000ms for faster failover
});

// Remove all interceptors for faster processing
export default apiClient;