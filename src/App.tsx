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
import AdminSignupPage from "./views/Admin/AdminSignupPage/AdminSignupPage";
import ProductMetrics from "./views/Admin/AdminPages/ProductMetrics/ProductMetrics";
import MonthlyTrendLineChart from "./views/Admin/AdminPages/MonthlyTrend/LineChart";
import CartPage from "./views/User/CartModal/CartPage";
import TenantsDataBase from "./views/Admin/TenantsDB/TenantsDB"
import OrderPage from "./views/User/OrderPage/OrderPage";
import DeliveryPage from "./views/User/DeliveryPage/DeliveryPage";
import PaymentPage from "./views/User/PaymentPage/PaymentPage";
import OrderSummary from "./views/User/OrderSummary/OrderSummary";
import Test from "./views/User/Test";



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
              <Route path="monthly-trend" element={<MonthlyTrendLineChart />} />
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
      <Route path="/user/my-cart" element={<CartPage/>} />
      <Route path="/admin/tenants-database" element={<TenantsDataBase />} />
      <Route path="/user/my-order" element={<OrderPage />} />
      <Route path="/delivery-details" element ={<DeliveryPage />}/>
      <Route path="/payment" element ={<PaymentPage />}/>
      <Route path="/user/order-summary" element ={<OrderSummary />}/>

      <Route path="/tt" element ={<Test />}/>
      
      
    </Routes>
  );
}

export default App;
