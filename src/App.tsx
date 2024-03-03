import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import SignupPage from "./views/SignupPage/SignupPage";
import ResetPasswordPage from "./views/Reset-your-passsword/ResetPasswordPage";
import ChangePassword from "./views/ChangePassword/ChangePassword";
import ShopProfile from "./views/ShopProfile/ShopProfile";
import Dashboard from "./views/Dashboard/DashboardCompnents/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import EnterOtpPage from "./views/Enter-otp/EnterOtpPage";
import ShopRegistrationPage from "./views/ShopRegistration/ShopRegistrationPage";
import StockYourShop from "./views/ShopRegistration/StockYourShopPage/StockYourShop";
import ShopSecurityPage from "./views/ShopSecurityPage/ShopSecurityPage";

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
              <Route path="shop-profile" element={<ShopProfile />} />
            </Routes>
          </ProtectedRoute>
        }
      />
      <Route path="/shop-registration" element={<ShopRegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/otp-verification" element={<EnterOtpPage />} />
      <Route path="/stock-your-shop" element={<StockYourShop />} />
      <Route path="/shop-security-page" element={<ShopSecurityPage />} />
    </Routes>
  );
}

export default App;
