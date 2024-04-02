/* eslint-disable react-hooks/exhaustive-deps */
//style imports
import {
  UserProfileModalContainer,
  ModalHeader,
  ModalBody,
} from "./UserProfileModal.styled";

//media imports
import userIcon from "../../assets/user-profile-modal-assets/user-pic-icon.png";
import editProfileIcon from "../../assets/user-profile-modal-assets/edit-profile-icon.png";
import myShopIcon from "../../assets/user-profile-modal-assets/my-shop-icon.png";
import cartIcon from "../../assets/user-profile-modal-assets/cart-icon.png";
import messagingIcon from "../../assets/user-profile-modal-assets/messaging-icon.png";
import logouticon from "../../assets/user-profile-modal-assets/logout-icon.png";
import { BsHeart } from "react-icons/bs";

//package imports
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import userData from "../../interfaces/userInterface";
import { useEffect, useState } from "react";
import { fetchUserShopDetails } from "../../api/users";
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
          <img src={userIcon} className="user-profile-modal-user-image" />
        </div>
        <div className="user-profile-modal-user-info-container">
          <p className="user-profile-modal-user-name">
            {userName.trim() ? userName : "userName"}
          </p>
          <Link
            to={token ? "/dashboard/user/edit-profile" : "/"}
            onClick={toggleVissiblity}
          >
            <p className="user-profile-modal-user-visit-profile">
              Visit your Profile
            </p>
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

          <Link
            to={token ? "/user/my-messages" : "/"}
            onClick={toggleVissiblity}
          >
            <div className="user-profile-modal-link-text-and-icon-container">
              <img
                src={messagingIcon}
                className="user-profile-modal-link-icon"
              />
              <p className="user-profile-modal-link-text">Messaging</p>
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
