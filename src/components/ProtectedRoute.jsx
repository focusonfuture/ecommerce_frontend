import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginRequiredPopup from "./LoginRequiredPopup";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();

  // Show popup only when not logged in
  const [showPopup] = useState(!token);

  const handleLogin = () => {
    navigate(`/login?redirect=${location.pathname}`);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      {/* Always render the protected page */}
      <div className={!token ? "protected-blur" : ""}>
        {children}
      </div>

      {/* If not logged in → show popup */}
      {!token && (
        <LoginRequiredPopup
          visible={showPopup}
          onLogin={handleLogin}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default ProtectedRoute;
