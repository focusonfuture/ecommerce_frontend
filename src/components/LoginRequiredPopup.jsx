import React from "react";
import "./LoginPopup.css";

const LoginRequiredPopup = ({ visible, onLogin, onCancel }) => {
  if (!visible) return null;

  return (
    <div className="blur-overlay">
      <div className="popup-container">
        <h3 className="popup-title">PLEASE LOGIN</h3>
        <p className="popup-text">You must be logged in to continue</p>

        <button className="popup-btn login-btn" onClick={onLogin}>
          Login
        </button>

        <button className="popup-btn cancel-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginRequiredPopup;
