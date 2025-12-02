import React from "react";
import PageBanner from "../common/PageBanner";
import { GoogleLogin } from "@react-oauth/google";

const RegisterComponent = () => {
  const handleGoogleSuccess = (credentialResponse) => {
    const id_token = credentialResponse.credential;

    fetch("http://your-django-domain.com/api/google-login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: id_token }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Django Google Register/Login:", data);
      })
      .catch((err) => console.error("Error:", err));
  };

  const handleGoogleError = () => {
    console.error("Google Login Failed");
  };

  return (
    <main>
      <PageBanner title="My account" />

      <div className="account-area mt-70 mb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="basic-login">
                <h5>Register</h5>

                <form>
                  <label>
                    Username <span>*</span>
                  </label>
                  <input type="text" placeholder="Enter Username" />

                  <label>
                    Email <span>*</span>
                  </label>
                  <input type="email" placeholder="Enter email" />

                  <label>
                    Password <span>*</span>
                  </label>
                  <input type="password" placeholder="Enter password" />

                  <button className="tp-in-btn w-100 mt-3">Register</button>
                </form>

                {/* Google Sign In Section */}
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
