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

//package imports
import { Link, useParams, useLocation } from "react-router-dom";
interface userProfileProps {
  toggleVissiblity: () => void;
}
const UserProfileModal = ({ toggleVissiblity }: userProfileProps) => {
  const handleLogout = () => {
    toggleVissiblity();
    localStorage.removeItem("token");
    localStorage.clear();
    return;
  };

  const { shopId } = useParams();
  // if(shopId) return null
  const location = useLocation();
  
  return (
    <UserProfileModalContainer>
      <ModalHeader>
        <div className="user-profile-modal-user-image-container">
          <img src={userIcon} className="user-profile-modal-user-image" />
        </div>
        <div className="user-profile-modal-user-info-container">
          <p className="user-profile-modal-user-name">User Name</p>
          <Link to={location.pathname.includes("dashboard") ? "/user/profile" : "/login"}>
            <p className="user-profile-modal-user-visit-profile">
              Visit your Profile
            </p>
          </Link>
        </div>
      </ModalHeader>

      <ModalBody>
        <div className="user-profile-modal-link-container">
          <Link to={location.pathname.includes("dashboard") ? "/user/edit-profile" : "/login"}>
            <div className="user-profile-modal-link-text-and-icon-container">
              <img
                src={editProfileIcon}
                className="user-profile-modal-link-icon"
              />
              <p className="user-profile-modal-link-text">Edit Profile</p>
            </div>
          </Link>

          <Link to={location.pathname.includes("dashboard") ? `/dashboard/shop-profile/${shopId}` : `/login`}>
            <div className="user-profile-modal-link-text-and-icon-container">
              <img src={myShopIcon} className="user-profile-modal-link-icon" />
              <p className="user-profile-modal-link-text">My Shop</p>
            </div>
          </Link>
        </div>
        <hr />
        <div className="user-profile-modal-link-container">
          <Link to={location.pathname.includes("dashboard") ? "/user/my-cart": "/login"}>
            <div className="user-profile-modal-link-text-and-icon-container">
              <img src={cartIcon} className="user-profile-modal-link-icon" />
              <p className="user-profile-modal-link-text">Cart</p>
            </div>
          </Link>

          <Link to={location.pathname.includes("dashboard") ? "/user/my-messages": "/login"}>
            <div className="user-profile-modal-link-text-and-icon-container">
              <img
                src={messagingIcon}
                className="user-profile-modal-link-icon"
              />
              <p className="user-profile-modal-link-text">Messaging</p>
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
