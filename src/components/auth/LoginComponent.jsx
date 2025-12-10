import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import LoginSuccessPopup from "../../components/popups/LoginSuccessPopup";

const LoginComponent = () => {
  const navigate = useNavigate();

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");

  // Popup state
  const [popupVisible, setPopupVisible] = useState(false);
  const [username, setUsername]         = useState("");

  const getRedirectUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("redirect") || "/";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await authService.login(email, password);
      authService.saveSession(data.token, data.user);

      // Save username for popup
      setUsername(data.user?.username || data.user?.email || "");

      // Show popup instead of redirecting immediately
      setPopupVisible(true);

    } catch (err) {
      setError("Invalid Credentials");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const id_token = credentialResponse.credential;
      const data = await authService.googleLogin(id_token);
      authService.saveSession(data.token, data.user);

      setUsername(data.user?.username || data.user?.email || "");
      setPopupVisible(true);

    } catch {
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
                <h5>Login</h5>

                <form onSubmit={handleSubmit}>
                  <label>Username or email address *</label>
                  <input
                    type="text"
                    placeholder="Enter Username"
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
                  Don't have an account? <a href="/register">Register</a>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP HERE */}
      <LoginSuccessPopup
        visible={popupVisible}
        username={username}
        onClose={() => {
          setPopupVisible(false);
          navigate(getRedirectUrl());
        }}
        autoCloseMs={2000} // auto close after 2 seconds
      />

    </main>
  );
};

export default LoginComponent;
