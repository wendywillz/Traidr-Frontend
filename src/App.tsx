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

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <Routes>
              <Route path={"shop/:shopId"} element={<Dashboard />} />
              <Route
                path="shop-registration"
                element={<ShopRegistrationPage />}
              />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="shop-profile/:shopId" element={<ShopProfile />} />
              <Route
                path="stock-your-shop/:shopId"
                element={<StockYourShop />}
              />
            </Routes>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/otp-verification" element={<EnterOtpPage />} />
      
    </Routes>
  );
}

export default App;
