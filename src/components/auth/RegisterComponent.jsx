import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

const RegisterComponent = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");

  // Handle normal register
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log("➡ Sending register request...");

      const data = await authService.register(username, email, password);

      console.log("✅ REGISTER SUCCESS:", data);

      // Save session (optional)
      authService.saveSession(data.token, data.user);

      console.log("📌 Token Saved:", localStorage.getItem("token"));
      console.log("📌 User Saved:", localStorage.getItem("user"));

      // AFTER REGISTER → GO TO LOGIN PAGE
      navigate("/login");

    } catch (err) {
      console.error("❌ REGISTER ERROR:", err);
      setError("Registration failed");
    }
  };

  // Handle google register/login
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      console.log("➡ Google token received");

      const id_token = credentialResponse.credential;

      const data = await authService.googleLogin(id_token);

      console.log("✅ GOOGLE REGISTER SUCCESS:", data);

      authService.saveSession(data.token, data.user);

      // After Google register → go to login
      navigate("/login");

    } catch (err) {
      console.error("❌ GOOGLE REGISTER ERROR:", err);
      setError("Google login failed");
    }
  };

  return (
    <main>
      <div className="account-area mt-70 mb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="basic-login">
                <h5>Register</h5>

                <form onSubmit={handleRegister}>
                  <label>
                    Username <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />

                  <label>
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <label>
                    Password <span>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  {error && (
                    <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
                  )}

                  <button className="tp-in-btn w-100 mt-3" type="submit">
                    Register
                  </button>
                </form>

                <div className="google-login-wrapper text-center mt-4">
                  <div className="google-divider">
                    <span>OR</span>
                  </div>

                  <div className="google-btn-box mt-3">
                    <GoogleLogin
                      onSuccess={handleGoogleSuccess}
                      onError={() => setError("Google login failed")}
                    />
                  </div>
                </div>

                <p className="text-center mt-3">
                  Already have an account? <a href="/login">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterComponent;
