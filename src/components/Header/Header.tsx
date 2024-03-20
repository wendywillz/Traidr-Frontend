import userDataInterface from "../../interfaces/userInterface.tsx";
import traidrLogo from "../../assets/traidr-logo-orange.png";
import "./HeaderStyle.tsx";
import HeaderStyle from "./HeaderStyle.tsx";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

import UserProfileModal from "../UserProfileModal/UserProfileModal.tsx";

interface userState {
  user: userDataInterface;
}
export default function Header() {
  const { shopId } = useParams();
  // const reviewer = useSelector((state: userDataInterface) => state.userId);

  const [notificationCount, setNotificationCount] = useState(0);
  const token = localStorage.getItem("token");
  const products = localStorage.getItem("shopProducts");
  const handleNotificationClick = () => {
    setNotificationCount(0);
  };
  const location = useLocation();
  const userData = useSelector((state: userState) => state.user);
  // useEffect(() => {

  // }, []);

  const [profileModalVisibility, setProfileModalVisibility] = useState(false);

  const toggleProfileModal = () => {
    console.log("profile", profileModalVisibility)
    setProfileModalVisibility(!profileModalVisibility);
  };

  return (
    <>
      {profileModalVisibility && (
        <UserProfileModal toggleVissiblity={toggleProfileModal} />
      )}
      <HeaderStyle>
        <div className="header-inner">
          <div className="logo-wrapper">
            <Link to={"/"}>
              <img
                src={traidrLogo}
                alt="traidr-logo"
                className="traidr-header-logo"
              />
            </Link>
          </div>
          <div className="header-right-btn-wrapper">
            <i className="fa-solid fa-bars small-screen-icon"></i>
            {location.pathname.includes("dashboard") || location.pathname.includes("user") ? (
              <>
                <div
                  className="shop-profile-notification-wrapper"
                  onClick={handleNotificationClick}
                >
                  <BsBell />
                  {notificationCount > 0 && (
                    <div className="notification-badge">
                      {notificationCount}
                    </div>
                  )}
                </div>
                <div className="user-profile-img-wrapper">
                  {userData && userData.profileImage ? (
                    <img
                      src={userData?.profileImage}
                      alt=""
                      onClick={toggleProfileModal}
                    />
                  ) : (
                    <div className="shop-profile-header-icon">
                      <FaUserCircle onClick={toggleProfileModal} />
                    </div>
                  )}
                </div>
                {products ? (
                  <Link
                    to={`/dashboard/shop-profile/${shopId}`}
                    className="header-right-signup-btn big-screen"
                  >
                    Go to Shop 
                  </Link>
                ) : (
                  <Link
                    to="/dashboard/shop-registration"
                    className="header-right-signup-btn big-screen"
                  >
                    Start Selling
                  </Link>
                )}
              </>
            ) : location.pathname === "/" ? (
              token ? (
                <>
                  <div
                    className="shop-profile-notification-wrapper"
                    onClick={handleNotificationClick}
                  >
                    <BsBell />
                    {notificationCount > 0 && (
                      <div className="notification-badge">
                        {notificationCount}
                      </div>
                    )}
                  </div>
                  <div className="user-profile-img-wrapper">
                    {userData && userData.profileImage ? (
                      <img
                        src={userData?.profileImage}
                        alt=""
                        onClick={toggleProfileModal}
                      />
                    ) : (
                      <div className="shop-profile-header-icon">
                        <FaUserCircle onClick={toggleProfileModal} />
                      </div>
                    )}
                  </div>
                  <Link
                    to="/dashboard/shop-registration"
                    className="header-right-signup-btn big-screen"
                  >
                    Start Selling
                  </Link>
                </>
              ) : (
                <>
                  <>
                    <Link
                      to="/login"
                      className="header-right-login-btn big-screen"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="header-right-signup-btn big-screen"
                    >
                      Sign Up
                    </Link>
                  </>
                </>
              )
            ) : (
              <>
                <div
                  className="shop-profile-notification-wrapper"
                  onClick={handleNotificationClick}
                >
                  <BsBell />
                  {notificationCount > 0 && (
                    <div className="notification-badge">
                      {notificationCount}
                    </div>
                  )}
                </div>
                <div className="user-profile-img-wrapper">
                  {userData && userData.profileImage ? (
                    <img
                      src={userData?.profileImage}
                      alt=""
                      onClick={toggleProfileModal}
                    />
                  ) : (
                    <div className="shop-profile-header-icon">
                      <FaUserCircle />
                    </div>
                  )}
                </div>
                {token ? (
                  <Link
                    to="/dashboard/shop-registration"
                    className="header-right-signup-btn big-screen"
                  >
                    Start Selling
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="header-right-login-btn big-screen"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="header-right-signup-btn big-screen"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </HeaderStyle>
    </>
  );
}
