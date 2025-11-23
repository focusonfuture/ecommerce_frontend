import React from "react";
import PageBanner from "../common/PageBanner";

const RegisterComponent = () => {
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
                  <label>Username <span>*</span></label>
                  <input type="text" placeholder="Enter Username" />

                  <label>Email <span>*</span></label>
                  <input type="email" placeholder="Enter email" />

                  <label>Password <span>*</span></label>
                  <input type="password" placeholder="Enter password" />

                  <button className="tp-in-btn w-100 mt-3">Register</button>
                </form>

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
