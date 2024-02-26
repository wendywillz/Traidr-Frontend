import { useState } from "react";
import { BsBell } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa"; 
import HeaderStyle from "../Header/HeaderStyle";
import traidrLogo from "../../assets/traidr-logo-orange.png";

export default function Header() {
  const [notificationCount, setNotificationCount] = useState(0);

  const handleNotificationClick = () => {
    setNotificationCount(0);
  };

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

        <div className="shop-header-right-btn-wrapper">
          <i className="fa-solid fa-bars small-screen-icon"></i>
          <div className="shop-profile-notification-wrapper" onClick={handleNotificationClick}>
          <BsBell />
          {notificationCount > 0 && (
            <div className="notification-badge">{notificationCount}</div>
          )}
        </div>

        <div className="shop-profile-header-icon">
        <FaUserCircle  />
        </div>

        </div>

      </div>
    </HeaderStyle>
  );
}
