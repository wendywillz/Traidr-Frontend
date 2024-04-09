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
import { UserAnalytics } from "./views/Admin/AdminPages/UserAnalytics/UserAnalytics";
import AdminProtectedRoute from "./components/ProtectedRoute/AdminProtectedRoute";
import AdminSignupPage from "./views/Admin/AdminSignupPage/AdminSignupPage";
import ProductMetrics from "./views/Admin/AdminPages/ProductMetrics/ProductMetrics";
import MonthlyTrendLineChart from "./views/Admin/AdminPages/MonthlyTrend/LineChart";
import CartPage from "./views/User/CartModal/CartPage";
import TenantsDataBase from "./views/Admin/TenantsDB/TenantsDB";
import OrderPage from "./views/User/OrderPage/OrderPage";
import DeliveryPage from "./views/User/DeliveryPage/DeliveryPage";
import PaymentPage from "./views/User/PaymentPage/PaymentPage";
import Receipt from "./views/User/Receipt/Receipt";
import OrderHistoryList from "./views/User/OrderHistoryList/OrderHistoryList";
import OrderSummary from "./views/User/OrderSummary/OrderSummary";


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
                <Route
                  path="description/:productId"
                  element={<Description />}
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
              <Route path="tenants-database" element={<TenantsDataBase />} />
            </Routes>
          </AdminProtectedRoute>
        }
      ></Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/traidr/admin/signup" element={<AdminSignupPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/otp-verification" element={<EnterOtpPage />} />

      <Route path="/success-modal" element={<SuccessModal />} />

       {/*USER PATHS: WRAP IN PROTECTED ROUTES AND AVERAGE USER TIME*/}
       <Route path="/user/my-wishlist" element={<Wishlist />} />
      <Route path="/user/my-cart" element={<CartPage/>} />
      <Route path="/user/my-orders" element ={<OrderHistoryList />}/>
      <Route path = "/user/my-orders/:saleId" element={<OrderSummary/>} />


      {/*ORDER PATHS: WRAP IN PROTECTED ROUTES AND AVERAGE USER TIME */}
      <Route path="/order/new-order" element={<OrderPage />} />
      <Route path="/order/delivery-details" element ={<DeliveryPage />}/>
      <Route path="/order/payment" element ={<PaymentPage />}/>
      <Route path="/order/receipt" element ={<Receipt />}/>


     
    </Routes>
  );
}

export default App;
