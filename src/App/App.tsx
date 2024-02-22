import { Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import LoginPage from "../views/LoginPage/LoginPage";
<<<<<<< HEAD
import SignupPage from "../views/SignupPage/SignupPage";
import ResetPasswordPage from "../views/Reset-your-passsword/ResetPasswordPage";
=======
import ChangePassword from "../views/ChangePassword/ChangePassword";
>>>>>>> e509029a66d8dd268a081fb09ae979bc7d92f41e
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
<<<<<<< HEAD
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
=======
      <Route path="/change-password" element={<ChangePassword />} />
>>>>>>> e509029a66d8dd268a081fb09ae979bc7d92f41e
    </Routes>
  );
}

export default App;
