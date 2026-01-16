import React, { useEffect } from "react";

const RegisterSuccessPopup = ({ visible, username, onClose, autoCloseMs = 2000 }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, autoCloseMs);
      return () => clearTimeout(timer);
    }
  }, [visible, autoCloseMs, onClose]);

  if (!visible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h3>Registration Successful 🎉</h3>
        <p>Welcome, <strong>{username}</strong>!</p>
        <p>Your account has been created successfully.</p>
      </div>
    </div>
  );
};

export default RegisterSuccessPopup;
