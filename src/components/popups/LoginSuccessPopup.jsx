import React, { useEffect } from "react";
import "./LoginSuccessPopup.css";

const LoginSuccessPopup = ({
  visible = false,
  username = "",
  onClose = () => {},
  autoCloseMs = 2200, // auto-close after this ms; 0 to disable
}) => {
  useEffect(() => {
    if (!visible) return;
    if (autoCloseMs > 0) {
      const t = setTimeout(onClose, autoCloseMs);
      return () => clearTimeout(t);
    }
  }, [visible, autoCloseMs, onClose]);

  if (!visible) return null;

  return (
    <div
      className="ls-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Login success"
      onClick={onClose}
    >
      <div
        className="ls-card"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="ls-leftGlow" aria-hidden="true" />
        <div className="ls-content">
          <div className="ls-iconWrap" aria-hidden="true">
            <svg className="ls-check" viewBox="0 0 64 64" width="68" height="68">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#80ffb3" />
                  <stop offset="1" stopColor="#00d4ff" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="30" fill="url(#g1)" opacity="0.14" />
              <path
                d="M18 34 L28.5 44 L46 22"
                fill="none"
                stroke="#0f766e"
                strokeWidth="4.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3 className="ls-title">Welcome back{username ? `, ${username}` : ""}!</h3>
          <p className="ls-sub">You have successfully signed in , Shop your favorite products now.</p>

          
        </div>

        {/* confetti layer */}
        <div className="ls-confetti" aria-hidden="true">
          <span className="c1" />
          <span className="c2" />
          <span className="c3" />
          <span className="c4" />
          <span className="c5" />
          <span className="c6" />
          <span className="c7" />
          <span className="c8" />
          <span className="c9" />
          <span className="c10" />
        </div>
      </div>
    </div>
  );
};

export default LoginSuccessPopup;
