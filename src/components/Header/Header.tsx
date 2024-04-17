/* eslint-disable react-hooks/exhaustive-deps */
import userDataInterface from "../../interfaces/userInterface.tsx";
import traidrLogo from "../../assets/traidr-logo-orange.png";
import CartCounter from "../CartCounter/CartCounter.tsx";
import "./HeaderStyle.tsx";
import HeaderStyle from "./HeaderStyle.tsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserProfileModal from "../UserProfileModal/UserProfileModal.tsx";
// import { fetchUserShopDetails } from "../../api/users.ts";

interface userState {
  user: userDataInterface;
}
export default function Header() {
  // const reviewer = useSelector((state: userDataInterface) => state.userId);

  // const [notificationCount, setNotificationCount] = useState(0);
  const token = localStorage.getItem("token");
  // const isSeller = useSelector((state: userState) => state.user.isSeller);
  // const [shopIdFromBackend, setShopIdFromBackend] = useState("");
  const [isRotate, setIsRotate] = useState(false);
  // useEffect(() => {
  //   if (isSeller) {
  //     fetchUserShopDetails().then((res) => {
  //       setShopIdFromBackend(res);
  //     });
  //   }
  // });
  // const handleNotificationClick = () => {
  //   setNotificationCount(0);
  // };
  const userData = useSelector((state: userState) => state.user);
  // useEffect(() => {

  // }, []);

  const [profileModalVisibility, setProfileModalVisibility] = useState(false);

  const toggleProfileModal = () => {
    setIsRotate(!isRotate);
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
            {token ? (
              <>
                {/* <div
                  className="shop-profile-notification-wrapper"
                  onClick={handleNotificationClick}
                >
                  <BsBell />
                  {notificationCount > 0 && (
                    <div className="notification-badge">
                      {notificationCount}
                    </div>
                  )}
                </div> */}
                <div
                  className="user-profile-img-wrapper"
                  onClick={toggleProfileModal}
                >
                  {userData &&
                  userData?.profilePic &&
                  !userData?.profilePic?.toString().includes("undefined") ? (
                    <div
                      style={{
                        borderRadius: "50%",
                        overflow: "hidden",
                        height: "2rem",
                        width: "2rem",
                      }}
                    >
                      <img
                        src={userData?.profilePic}
                        alt=""
                        onClick={toggleProfileModal}
                      />
                    </div>
                  ) : (
                    <div className="shop-profile-header-icon">
                      <FaRegUser />
                    </div>
                  )}
                  <span style={{ fontSize: "12px" }}>
                    Hi, {userData?.name?.split(" ")[0]}
                  </span>
                  <span className="user-drop-down-icon">
                    <MdKeyboardArrowDown
                      style={{
                        transform: isRotate ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  </span>
                </div>
                <div className="cart-count">
                  <CartCounter />
                </div>
                {/* {shopIdFromBackend.trim() ? (
                  <Link
                    to={`/dashboard/shop-profile/${shopIdFromBackend}`}
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
                )} */}
              </>
            ) : (
              <>
                <Link to="/login" className="header-right-login-btn big-screen">
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
          </div>
        </div>
      </HeaderStyle>
    </>
  );
}
