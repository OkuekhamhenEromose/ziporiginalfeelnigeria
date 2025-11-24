import axios from "axios";

// Create a separate Axios instance for Tourism Exchange
const tourismExchangeAPI = axios.create({
  baseURL: "https://feelnigeriatourismexchange.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// Add request interceptor for better error handling
tourismExchangeAPI.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to:`, config.url);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for better error handling
tourismExchangeAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    if (error.code === 'ERR_NETWORK') {
      throw new Error('Network error: Unable to connect to server. Please check your internet connection.');
    }
    if (error.response?.status === 404) {
      throw new Error('Server endpoint not found. Please try again later.');
    }
    return Promise.reject(error);
  }
);

export default tourismExchangeAPI;