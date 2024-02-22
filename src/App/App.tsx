import { Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import LoginPage from "../views/LoginPage/LoginPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
