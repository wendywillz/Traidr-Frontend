import HeaderStyle from "./AdminHeader.Styled";
// import { BsBell } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import traidrLogo from "../../../../assets/traidr-logo-orange.png";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserProfileModal from "../../../../components/UserProfileModal/UserProfileModal";
import { useState } from "react";

export default function AdminHeader() {
  const userData = useSelector((state: RootState) => state.user);
  const [isRotate, setIsRotate] = useState(false);
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
          <div className="header-logo-wrapper">
            <Link to="/">
              <img src={traidrLogo} alt="" />
            </Link>
          </div>
          <div className="header-right-btn-wrapper">
            {/* <BsBell className="admin-notification-icon" /> */}
            <div
              className="user-profile-img-wrapper"
              onClick={toggleProfileModal}
            >
              {userData &&
              userData.profilePic &&
              !userData.profilePic?.toString().includes("undefined") ? (
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
                  <FaUserCircle className="admin-profile-img" />
                </div>
              )}
              <span style={{ fontSize: "12px" }}>
                Hi, {userData.name.split(" ")[0]}
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
            {/* <FaUserCircle className="admin-profile-img" /> */}
          </div>
        </div>
      </HeaderStyle>
    </>
  );
}
