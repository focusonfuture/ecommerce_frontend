import api from "./api";

const authService = {
  async login(email, password) {
    const res = await api.post("/login/", {
      email,       
      password,
    });

    return {
      token: res.data.access,
      refresh: res.data.refresh,
      user: { email },
    };
  },

  async register({ username, email, password, phone, firstName, lastName }) {
    const res = await api.post("/register/", {
      username,
      email,
      password,
      password2: password,
      first_name: firstName,
      last_name: lastName,
      phone,
    });

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
  },
};

export default authService;
