import axios from "axios";

// backend url
const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL as string;
const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("bcakend url", BACKEND_URL);
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
