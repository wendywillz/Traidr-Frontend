import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/User/LandingPage/LandingPage";
import LoginPage from "./views/User/LoginPage/LoginPage";
import SignupPage from "./views/User/SignupPage/SignupPage";
import ResetPasswordPage from "./views/User/Reset-your-passsword/ResetPasswordPage";
import ChangePassword from "./views/User/ChangePassword/ChangePassword";
import ShopProfile from "./views/User/ShopProfile/ShopProfile";
import Dashboard from "./views/User/Dashboard/DashboardCompnents/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import EnterOtpPage from "./views/User/Enter-otp/EnterOtpPage";
import ShopRegistrationPage from "./views/User/ShopRegistration/ShopRegistrationPage";
import StockYourShop from "./views/User/ShopRegistration/StockYourShopPage/StockYourShop";
import Description from "./views/User/Description/DescriptionComponents/Description";
import SuccessModal from "./components/SuccessModal/SuccessModalComponent";
import Wishlist from "./views/User/wishlistModal/Wishlist";
import ProfileSettings from "./views/User/ProfileSettingsPage/ProfileSettingsMain/ProfileSettings";
import AdminSideBar from "./components/adminSideBar/AdminSideBar";
import AdminDashboardPage from "./views/Admin/AdminPages/AdminDashboard/AdminDashboardPage";
//Below is a test page. remove later on.
import TestPage from "./views/TestContent/TestPage";

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
              <Route path="user/edit-profile" element={<ProfileSettings/>} />
            </Routes>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/otp-verification" element={<EnterOtpPage />} />
      <Route path="/description/:productId" element={<Description />} />
      <Route path="/user/my-wishlist" element={<Wishlist />} />
      <Route path="/success-modal" element={<SuccessModal />} />
      <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
}

export default App; 
