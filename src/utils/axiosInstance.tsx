import axios from "axios";
// const {VITE_APP_BASE_URL} = process.env
// backend url
const BACKENDURL = import.meta.env.VITE_APP_BASE_URL
const axiosInstance = axios.create({
  baseURL: BACKENDURL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
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
