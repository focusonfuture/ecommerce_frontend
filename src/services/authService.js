// src/services/authService.js
import api from "./api";

const ACCESS_TOKEN_KEY = "access_token";
const USER_KEY = "user";

const authService = {
  async login(email, password) {
    const res = await api.post("/login/", { email, password });

    if (!res.data?.access) {
      throw new Error("Invalid login response");
    }

    return {
      access: res.data.access,
      refresh: res.data.refresh ?? null,
      user: { email },
    };
  },

  async register(payload) {
    await api.post("/register/", payload);
  },

  saveSession(accessToken, user) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
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
