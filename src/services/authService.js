// src/services/authService.js
import api from "./api";

const ACCESS_TOKEN_KEY = "access_token";
const USER_KEY = "user";

const authService = {
  async login(email, password) {
    const res = await api.post("/auth/login/", { email, password });

    if (!res.data?.access) {
      throw new Error("Invalid login response");
    }

    localStorage.setItem(ACCESS_TOKEN_KEY, res.data.access);
    localStorage.setItem(USER_KEY, JSON.stringify(res.data.user || { email }));

    return res.data;
  },

  async register(payload) {
    // THIS LINE IS NON-NEGOTIABLE
    return await api.post("/auth/register/", payload);
  },

  logout() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  isLoggedIn() {
    return Boolean(localStorage.getItem(ACCESS_TOKEN_KEY));
  },
};

export default authService;
