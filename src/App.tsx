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
import AdminDashboardPage from "./views/Admin/AdminPages/AdminDashboard/AdminDashboardPage";
import AverageUSageTime from "./components/AverageUsageTime/AverageUSageTime";
import TestPage from "./views/TestContent/TestPage";
import { UserAnalytics } from "./views/Admin/AdminPages/UserAnalytics/UserAnalytics";
import AdminProtectedRoute from "./components/ProtectedRoute/AdminProtectedRoute";
import AddQuantityModal from "./views/User/AddQuantityModal/AddQuantityModal";
import DeliveryDetails from "./views/User/DeliveryDetail/DeliveryDetails";
import AdminSignupPage from "./views/Admin/AdminSignupPage/AdminSignupPage";
import ProductMetrics from "./views/Admin/AdminPages/ProductMetrics/ProductMetrics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/dashboard/*"
        element={
          <AverageUSageTime>
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
                <Route path="user/edit-profile" element={<ProfileSettings />} />
              </Routes>
            </ProtectedRoute>
          </AverageUSageTime>
        }
      />
      <Route
        path="/admin/dashboard/*"
        element={
          <AdminProtectedRoute>
            <Routes>
              <Route index element={<AdminDashboardPage />} />
              <Route path="user-analytics" element={<UserAnalytics />} />
              <Route path="product-metrics" element={<ProductMetrics />} />
            </Routes>
          </AdminProtectedRoute>
        }
      ></Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/traidr/admin/signup" element={<AdminSignupPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/otp-verification" element={<EnterOtpPage />} />
      <Route path="/description/:productId" element={<Description />} />
      <Route path="/user/my-wishlist" element={<Wishlist />} />
      <Route path="/success-modal" element={<SuccessModal />} />
      <Route path="/test" element={<TestPage />} />
      <Route
        path="/qty"
        element={<AddQuantityModal toggleVisiblity={() => {}} />}
      />
      <Route path="/delivery-details" element={<DeliveryDetails />} />
    </Routes>
  );
}

export default App;
