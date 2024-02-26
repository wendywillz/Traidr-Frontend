import { Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import LoginPage from "../views/LoginPage/LoginPage";
import SignupPage from "../views/SignupPage/SignupPage";
import ResetPasswordPage from "../views/Reset-your-passsword/ResetPasswordPage";
import ChangePassword from "../views/ChangePassword/ChangePassword";
import ShopProfile from "../views/ShopProfile/ShopProfile";
import Dashboard from "../views/Dashboard/DashboardCompnents/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/shop-profile" element={<ShopProfile />} />
    </Routes>
  );
}

export default App;
