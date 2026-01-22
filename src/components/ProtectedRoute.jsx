// src/components/ProtectedRoute.jsx
import { useLocation, useNavigate } from "react-router-dom";
import LoginRequiredPopup from "./LoginRequiredPopup";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/login?redirect=${location.pathname}`);
  };

  const handleCancel = () => {
    navigate("/");
  };

  //  Do NOT render protected content if not logged in
  if (!token) {
    return (
      <LoginRequiredPopup
        visible={true}
        onLogin={handleLogin}
        onCancel={handleCancel}
      />
    );
  }

  // ✅ Safe to render
  return <>{children}</>;
};

export default ProtectedRoute;
