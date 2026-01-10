



import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import axios from "axios";


export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.example.com", 
  timeout: 20000, 
  headers: {
    "Content-Type": "application/json",
  },
});




axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('access_token');
    config.headers = config.headers ?? {};
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);
axiosInstance.interceptors.response.use()


