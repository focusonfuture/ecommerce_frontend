import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import LoginSuccessPopup from "../../components/popups/LoginSuccessPopup";

const LoginComponent = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [popupVisible, setPopupVisible] = useState(false);
  const [popupEmail, setPopupEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await authService.login(email, password);
      authService.saveSession(data.token, data.user);

      setPopupEmail(email);
      setPopupVisible(true);
    } catch (err) {
      console.log("LOGIN ERROR:", err.response?.data); // ← SHOW REAL BACKEND ERROR

      setError(
        err.response?.data?.detail ||
        err.response?.data?.message ||
        "Invalid email or password"
      );
    }
  };

  return (
    <main>
      <div className="account-area mt-70 mb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="basic-login">
                <h5>Login</h5>

                <form onSubmit={handleSubmit}>
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <label>Password *</label>
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

                  <button className="tp-in-btn w-100">Login</button>
                </form>

                <p className="text-center mt-3">
                  Don’t have an account? <a href="/register">Register</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LoginSuccessPopup
        visible={popupVisible}
        username={popupEmail}
        onClose={() => {
          setPopupVisible(false);
          navigate("/");
        }}
        autoCloseMs={2000}
      />
    </main>
  );
};

export default LoginComponent;
