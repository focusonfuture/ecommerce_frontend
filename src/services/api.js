import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // https://admin-ecommerce.nikandu.in/api
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * Attach token ONLY for protected routes
 * Never send Authorization for login/register
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    const isPublicEndpoint =
      config.url.includes("/auth/login") ||
      config.url.includes("/auth/register");

    if (token && !isPublicEndpoint) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
