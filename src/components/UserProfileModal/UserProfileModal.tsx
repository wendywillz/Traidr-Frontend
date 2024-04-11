/* eslint-disable react-hooks/exhaustive-deps */
//style imports
import {
  UserProfileModalContainer,
  ModalHeader,
  ModalBody,
} from "./UserProfileModal.styled";

//media imports
import editProfileIcon from "../../assets/user-profile-modal-assets/edit-profile-icon.png";
import myShopIcon from "../../assets/user-profile-modal-assets/my-shop-icon.png";
import cartIcon from "../../assets/user-profile-modal-assets/cart-icon.png";
//import messagingIcon from "../../assets/user-profile-modal-assets/messaging-icon.png";
import orderListIcon from "../../assets/user-profile-modal-assets/purchase_order_icon.png";
import logouticon from "../../assets/user-profile-modal-assets/logout-icon.png";
import { BsHeart } from "react-icons/bs";

//package imports
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import userData from "../../interfaces/userInterface";
import { useEffect, useState } from "react";
import { fetchUserShopDetails } from "../../api/users";
import { RootState } from "../../app/store";
import { FaUser } from "react-icons/fa";

interface userProfileProps {
  toggleVissiblity: () => void;
}
interface userState {
  user: userData;
}
const UserProfileModal = ({ toggleVissiblity }: userProfileProps) => {
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    toggleVissiblity();
    localStorage.removeItem("token");
    localStorage.clear();
    return;
  };

  // const { shopId } = useParams();
  // if(shopId) return null
  const userData = useSelector((state: RootState) => state.user);
  const isSeller = useSelector((state: userState) => state.user.isSeller);
  const userName = useSelector((state: userState) => state.user.name);
  const [shopIdFromBackend, setShopIdFromBackend] = useState("");
  useEffect(() => {
    if (isSeller) {
      fetchUserShopDetails().then((res) => {
        setShopIdFromBackend(res);
      });
    }
  }, []);

  return (
    <UserProfileModalContainer>
      <ModalHeader>
        <div className="user-profile-modal-user-image-container">
          {userData &&
          userData.profileImage &&
          !userData.profileImage?.toString().includes("undefined") ? (
            <div
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                height: "3rem",
                width: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={userData?.profileImage}
                alt=""
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          ) : (
            <div
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                height: "3rem",
                width: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaUser style={{ fontSize: "2rem" }} />
            </div>
          )}
          {/* <img src={userIcon} className="user-profile-modal-user-image" /> */}
        </div>
        <div className="user-profile-modal-user-info-container">
          <p className="user-profile-modal-user-name">
            {userName.trim() ? userName : "userName"}
          </p>
          <Link
            to={token ? "/dashboard/user/edit-profile" : "/"}
            onClick={toggleVissiblity}
            style={{
              fontSize: "0.9rem",
              fontWeight: "500",
              color: "#ffffff",
              textDecoration: "none",
              margin: 0,
            }}
          >
            Visit your Profile
          </Link>
        </div>
      </ModalHeader>

      <ModalBody>
        <div className="user-profile-modal-link-container">
          <Link
            to={token ? "/dashboard/user/edit-profile" : "/"}
            onClick={toggleVissiblity}
          >
            <div className="user-profile-modal-link-text-and-icon-container">
              <img
                src={editProfileIcon}
                className="user-profile-modal-link-icon"
              />
              <p className="user-profile-modal-link-text">Edit Profile</p>
            </div>
          </Link>

          <Link
            to={
              shopIdFromBackend.trim()
                ? `/dashboard/shop-profile/${shopIdFromBackend}`
                : `/dashboard/shop-registration`
            }
            onClick={toggleVissiblity}
          >
            <div className="user-profile-modal-link-text-and-icon-container">
              <img src={myShopIcon} className="user-profile-modal-link-icon" />
              <p className="user-profile-modal-link-text">My Shop</p>
            </div>
          </Link>
        </div>
        <hr />
        <div className="user-profile-modal-link-container">
          <Link to={token ? "/user/my-cart" : "/"} onClick={toggleVissiblity}>
            <div className="user-profile-modal-link-text-and-icon-container">
              <img src={cartIcon} className="user-profile-modal-link-icon" />
              <p className="user-profile-modal-link-text">Cart</p>
            </div>
          </Link>

          <Link to={token ? "/user/my-orders" : "/"} onClick={toggleVissiblity}>
            <div className="user-profile-modal-link-text-and-icon-container">
              <img
                src={orderListIcon}
                className="user-profile-modal-link-icon"
              />
              <p className="user-profile-modal-link-text">Orders</p>
            </div>
          </Link>

          <Link
            to={token ? "/user/my-wishlist" : "/login"}
            onClick={toggleVissiblity}
          >
            <div className="user-profile-modal-link-text-and-icon-container">
              <BsHeart
                color="#E04F16"
                className="user-profile-modal-link-icon"
              />
              <p className="user-profile-modal-link-text">Wishlist</p>
            </div>
          </Link>
        </div>
        <hr />
        <div className="user-profile-modal-link-container">
          <Link to={"/"} onClick={handleLogout}>
            <div className="user-profile-modal-link-text-and-icon-container">
              <img src={logouticon} className="user-profile-modal-link-icon" />
              <p className="user-profile-modal-link-text">Logout</p>
            </div>
          </Link>
        </div>
      </ModalBody>
    </UserProfileModalContainer>
  );
};

export default UserProfileModal;
