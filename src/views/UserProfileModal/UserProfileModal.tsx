//style imports
import { UserProfileModalContainer, ModalHeader, ModalBody } from "./UserProfileModal.styled"

//media imports
import userIcon from "../../assets/user-profile-modal-assets/user-pic-icon.png"
import editProfileIcon from "../../assets/user-profile-modal-assets/edit-profile-icon.png"
import myShopIcon from "../../assets/user-profile-modal-assets/my-shop-icon.png"
import cartIcon from "../../assets/user-profile-modal-assets/cart-icon.png"
import messagingIcon from "../../assets/user-profile-modal-assets/messaging-icon.png"
import logouticon from "../../assets/user-profile-modal-assets/logout-icon.png"

//package imports
import { Link, useParams } from "react-router-dom"

const UserProfileModal = () => {
    const { shopId } = useParams();
  return (
    <UserProfileModalContainer>
        <ModalHeader>
            <div className="user-profile-modal-user-image-container"><img src={userIcon} className="user-profile-modal-user-image"/>
            </div>
            <div className="user-profile-modal-user-info-container">
                <p className="user-profile-modal-user-name">User Name</p>
                <Link to="/user/profile">
                <p className="user-profile-modal-user-visit-profile">Visit your Profile</p>
                </Link>
                
            </div>
        </ModalHeader>

        <ModalBody>
            <div className="user-profile-modal-link-container">
                <Link to="/user/edit-profile">
                    <div className="user-profile-modal-link-text-and-icon-container">
                        <img src={editProfileIcon} className="user-profile-modal-link-icon"/>
                        <p className="user-profile-modal-link-text">Edit Profile</p>
                    </div>
                </Link>

                <Link to={`/dashboard/shop-profile/${shopId}`}>
                    <div className="user-profile-modal-link-text-and-icon-container">
                        <img src={myShopIcon} className="user-profile-modal-link-icon"/>
                        <p className="user-profile-modal-link-text">My Shop</p>
                    </div>
                </Link>
            </div>
            <hr/>
            <div className="user-profile-modal-link-container">
                <Link to="/user/my-cart">
                    <div className="user-profile-modal-link-text-and-icon-container">
                        <img src={cartIcon} className="user-profile-modal-link-icon"/>
                        <p className="user-profile-modal-link-text">Cart</p>
                    </div>
                </Link>

                <Link to="/user/my-messages">
                    <div className="user-profile-modal-link-text-and-icon-container">
                        <img src={messagingIcon} className="user-profile-modal-link-icon"/>
                        <p className="user-profile-modal-link-text">Messaging</p>
                    </div>
                </Link>
            </div>
            <hr/>
            <div className="user-profile-modal-link-container">
                <Link to="/">
                    <div className="user-profile-modal-link-text-and-icon-container">
                        <img src={logouticon} className="user-profile-modal-link-icon"/>
                        <p className="user-profile-modal-link-text">Logout</p>
                    </div>
                </Link>
            </div>


        </ModalBody>

    </UserProfileModalContainer>
  )
}

export default UserProfileModal