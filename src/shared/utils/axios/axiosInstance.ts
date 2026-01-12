



import type { AxiosInstance } from "axios";
import axios from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.example.com", 
  timeout: 20000, 
  headers: {
    "Content-Type": "application/json",
  },
});




//  interseptor here i will add ok 
