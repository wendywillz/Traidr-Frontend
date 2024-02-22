import traidrLogo from "../../assets/traidr-logo-orange.png";
import "./HeaderStyle.tsx";
import HeaderStyle from "./HeaderStyle.tsx";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <HeaderStyle>
      <div className="header-inner">
        <div className="logo-wrapper">
          <img
            src={traidrLogo}
            alt="traidr-logo"
            className="traidr-header-logo"
          />
        </div>
        <div className="header-right-btn-wrapper">
          <i className="fa-solid fa-bars small-screen-icon"></i>
          <Link to="/login" className="header-right-login-btn big-screen">
            Login
          </Link>
          <Link to="/signup" className="header-right-signup-btn big-screen">
            Sign Up
          </Link>
        </div>
      </div>
    </HeaderStyle>
  );
}
