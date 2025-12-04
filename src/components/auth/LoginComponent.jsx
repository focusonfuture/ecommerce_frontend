import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const LoginComponent = () => {
  const handleGoogleSuccess = (credentialResponse) => {
    const id_token = credentialResponse.credential;

    // Send to Django backend
    fetch("http://your-django-domain.com/api/google-login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: id_token }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Django Login Result:", data);
        // Save JWT / session if backend returns it
        // localStorage.setItem("token", data.token);
      })
      .catch((err) => console.error("Error:", err));
  };

  const handleGoogleError = () => {
    console.error("Google Login Failed");
  };

  return (
    <main>
   

      <div className="account-area mt-70 mb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="basic-login">
                <h5>Login</h5>

                <form>
                  <label>
                    Username or email address <span>*</span>
                  </label>
                  <input type="text" placeholder="Enter Username" />

                  <label>
                    Password <span>*</span>
                  </label>
                  <input type="password" placeholder="Enter password" />

                  <div className="login-action mb-10 fix">
                    <span className="log-rem f-left">
                      <input id="remember" type="checkbox" />
                      <label htmlFor="remember">Remember me</label>
                    </span>
                    <span className="forgot-login f-right">
                      <a href="#">Lost your password?</a>
                    </span>
                  </div>

                  <button className="tp-in-btn w-100">Login</button>
                </form>

                {/* Google Login Button */}
                <div className="google-login-wrapper text-center mt-4">
                  <div className="google-divider">
                    <span>OR</span>
                  </div>

                  <div className="google-btn-box mt-3">
                    <GoogleLogin
                      onSuccess={handleGoogleSuccess}
                      onError={handleGoogleError}
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
    </main>
  );
};

export default LoginComponent;
