import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastProvider } from "./components/toast/Toast";


function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <ToastProvider>
        <AppRoutes />
      </ToastProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
