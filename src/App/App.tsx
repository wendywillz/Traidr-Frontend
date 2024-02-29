import { Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import LoginPage from "../views/LoginPage/LoginPage";
import SignupPage from "../views/SignupPage/SignupPage";
import ResetPasswordPage from "../views/Reset-your-passsword/ResetPasswordPage";
import ChangePassword from "../views/ChangePassword/ChangePassword";
import ShopProfile from "../views/ShopProfile/ShopProfile";
import Dashboard from "../views/Dashboard/DashboardCompnents/Dashboard";
import OtpVerificationPage from "../views/OtpVerificationPage/OtpverificationPage";
import ProtectedRoute from "../utils/ProtectedRoute";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="shop-profile" element={<ShopProfile />} />
            </Routes>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/otp-verification" element={<OtpVerificationPage />} />
    </Routes>
  );
}

export default App;
