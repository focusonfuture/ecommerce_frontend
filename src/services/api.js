// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://admin.nikandu.in/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
