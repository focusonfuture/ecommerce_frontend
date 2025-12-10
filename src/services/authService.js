import api from "./api";

const authService = {
  async login(email, password) {
    const res = await api.post("/api/login/", { email, password });
    return res.data;
  },

  async register(username, email, password) {
    const res = await api.post("/api/register/", { username, email, password });
    return res.data;
  },

  async googleLogin(idToken) {
    const res = await api.post("/api/google-login/", { token: idToken });
    return res.data;
  },

  saveSession(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  isLoggedIn() {
    return !!localStorage.getItem("token");
  }
};

export default authService;
