import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import RegisterSuccessPopup from "../../components/popups/RegisterSuccessPopup";

const RegisterComponent = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState("");

  // popup
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupName, setPopupName] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.password2) {
      setError("Passwords do not match");
      return;
    }

    try {
      await authService.register({
        username: form.username,
        email: form.email,
        phone: form.phone,
        firstName: form.first_name,
        lastName: form.last_name,
        password: form.password,
      });

      // Set popup name (email or username)
      setPopupName(form.username || form.email);

      // Show success popup
      setPopupVisible(true);

    } catch (err) {
      console.error("Register error:", err);
      setError("Registration failed. Please check your details.");
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
                  
                  <label>Username *</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={form.username}
                    onChange={onChange}
                    required
                  />

                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={onChange}
                    required
                  />

                  <label>Phone *</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter phone number"
                    value={form.phone}
                    onChange={onChange}
                    required
                  />

                  <label>First Name *</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Enter first name"
                    value={form.first_name}
                    onChange={onChange}
                    required
                  />

                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Enter last name"
                    value={form.last_name}
                    onChange={onChange}
                    required
                  />

                  <label>Password *</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={onChange}
                    required
                  />

                  <label>Confirm Password *</label>
                  <input
                    type="password"
                    name="password2"
                    placeholder="Re-enter password"
                    value={form.password2}
                    onChange={onChange}
                    required
                  />

                  {error && (
                    <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
                  )}

                  <button className="tp-in-btn w-100 mt-3" type="submit">
                    Register
                  </button>
                </form>

                <p className="text-center mt-3">
                  Already have an account? <a href="/login">Login</a>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      <RegisterSuccessPopup
        visible={popupVisible}
        username={popupName}
        onClose={() => {
          setPopupVisible(false);
          navigate("/login"); 
        }}
        autoCloseMs={2000}
      />
    </main>
  );
};

export default RegisterComponent;
