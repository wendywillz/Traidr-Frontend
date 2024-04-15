//style imports
import {
  ProfileSettingsPageContainer,
  ProfileFormsContainer,
  ChangePictureForm,
  UserDetailsForm,
  FormSectionContainer,
  UserDetailsSection,
} from "./ProfileSettingsPage.styled";

//component imports
import ProfileNavigation from "../UserProfileNavigation/ProfileNavigation";
import Header from "../../../../components/Header/Header";

//package imports
import { BsCameraFill, BsPersonCircle } from "react-icons/bs";
import { useState, ChangeEvent, FormEvent } from "react";
import axiosInstance from "../../../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useDispatch } from "react-redux";
import { setProfilePics } from "../../../../app/features/userAuth/userAuthSlice";
import { ReactNode } from "react";
import ConfirmationModalMainWrapper from "../../../../components/ConfirmationModal/ConfirmationModalMainWrapper";
//Interface declaration
interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  address: string;
  profilePic: string | Blob | null | File;
}

import userData from "../../../../interfaces/userInterface";
// import BackButton from "../../../../components/BackButton/BackButton";
import SmallButton from "../../../../components/button/smallButton/smallButton";
import BackButton from "../../../../components/BackButton/BackButton";
import { Link } from "react-router-dom";

export const ProfileSettings = () => {
  //fetching the user
  const currentUser: userData = useSelector((state: RootState) => state.user);
  //const currentUserName:string|null = useSelector((state: RootState)=> state.user.name)

  //Logic for Handling User Details
  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: currentUser.name.split(" ")[0],
    lastName: currentUser.name.split(" ")[1],
    email: currentUser.email,
    phoneNumber: currentUser.phoneNumber,
    gender: currentUser.gender,
    address: currentUser.address,
    profilePic: currentUser.profileImage,
  });
  const dispatch = useDispatch();

  //Logic for handling photo upload and changing the displayed picture
  const [displayedProfilePic, setDisplayedProfilePic] = useState<
    string | ReactNode
  >(currentUser.profileImage);
  const [, setPhotoFile] = useState<File | null>(null);
  const [, setDisplayUploadedPhotoName] = useState<string>();
  const [, setPhotoDisplayError] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteProfilePic = async () => {
    setDisplayedProfilePic(<BsPersonCircle size={"9vw"} />);
    setUserDetails({ ...userDetails, profilePic: null });
    const formData = new FormData();

    try {
      for (const key in userDetails) {
        formData.append(key, userDetails[key as keyof UserDetails] as string);
      }
      const res = await axiosInstance.post(`/users/edit-profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res && res.data.updatedUser) {
        if (res.data.updatedUser.profilePic) {
          dispatch(setProfilePics(res.data.updatedUser.profilePic));
        }
        setIsOpen(false);
        location.reload();
      }
    } catch (error) {
      return error;
    }
  };
  //Handling the input changes on the rest of the form
  const handleChange = (
    e: ChangeEvent<
      | HTMLFormElement
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >
  ) => {
    setUserDetails({
      ...userDetails,
      [e.target.name as keyof UserDetails]: e.target.value,
    });
  };

  const handleChangeProfilePic = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const maxSize = 3 * 1024 * 1024;
    const displayedPhoto = event.target.files[0];
    const uploadedPhoto = event.target.files[0];
    if (uploadedPhoto.size > maxSize || displayedPhoto.size > maxSize) {
      setPhotoDisplayError("File size exceeds 10mb");
      return;
    }

    if (uploadedPhoto) {
      setPhotoFile(uploadedPhoto);
      setUserDetails({ ...userDetails, profilePic: uploadedPhoto });
      setDisplayUploadedPhotoName(uploadedPhoto.name);
    }

    if (displayedPhoto) {
      //allowing the selected picture to show
      const reader = new FileReader();
      reader.onload = () => {
        setDisplayedProfilePic(reader.result as string);
      };
      reader.readAsDataURL(displayedPhoto);
    }
  };
  //submitting the  user details
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();

    try {
      for (const key in userDetails) {
        formData.append(key, userDetails[key as keyof UserDetails] as string);
      }
      const res = await axiosInstance.post(`/users/edit-profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res && res.data.updatedUser) {
        console.log("res.data", res.data);
        if (res.data.updatedUser.profilePic) {
          dispatch(setProfilePics(res.data.updatedUser.profilePic));
        }
        location.reload();
      }
      console.log("res.data", res.data);
    } catch (error) {
      return error;
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////////////
  //Logic for hanling userphoto upload

  return (
    <>
      <ConfirmationModalMainWrapper
        isOpen={isOpen}
        modalText="Are you sure you want to remove your profile Image?"
        handleDelete={handleDeleteProfilePic}
        setIsOpen={() => setIsOpen(false)}
      />
      <ProfileSettingsPageContainer>
        <Header />
        <BackButton linkTo={"/dashboard"} />
        <ProfileFormsContainer>
          <ProfileNavigation />

          <UserDetailsForm onSubmit={handleFormSubmit}>
            <ChangePictureForm>
              <div className="profile-settings-user-image-and-camera-icon-container">
                {displayedProfilePic &&
                !displayedProfilePic?.toString().includes("undefined") ? (
                  <img
                    src={displayedProfilePic as string}
                    className="profile-settings-user-image"
                  />
                ) : (
                  <BsPersonCircle size={"9vw"} />
                )}

                <label
                  htmlFor="profilePictureInput"
                  className="profile-settings-change-photo-label"
                >
                  <BsCameraFill
                    style={{
                      color: "#ffffff",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  />
                </label>
                <input
                  id="profilePictureInput"
                  name="profilePic"
                  type="file"
                  accept="image/*"
                  className="profile-settings-change-photo-input"
                  onChange={handleChangeProfilePic}
                />
              </div>

              <div className="profile-settings-change-photo-buttons-container">
                <button
                  className="profile-settings-page-upload-photo-button"
                  style={{ position: "relative" }}
                  type="button"
                >
                  <input
                    id="profilePictureInput"
                    name="profilePic"
                    type="file"
                    accept="image/*"
                    style={{
                      opacity: 0,
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      cursor: "pointer",
                      top: 0,
                      left: 0,
                    }}
                    onChange={handleChangeProfilePic}
                  />
                  Upload New
                </button>
                <button
                  className="profile-settings-page-delete-photo-button"
                  onClick={() => setIsOpen(true)}
                  style={{ cursor: "pointer" }}
                  type="button"
                >
                  Delete Photo
                </button>
              </div>
            </ChangePictureForm>
            <UserDetailsSection>
              {/*LEFT SIDE OF FORM */}
              <FormSectionContainer>
                <div className="profile-settings-form-label-and-input-container">
                  <label
                    htmlFor="firstNameInput"
                    className="profile-settings-form-label"
                  >
                    First Name
                  </label>
                  <br />
                  <input
                    id="firstNameInput"
                    name="firstName"
                    type="text"
                    className="profile-seetings-form-input"
                    value={userDetails.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-settings-form-label-and-input-container">
                  <label
                    htmlFor="emailInput"
                    className="profile-settings-form-label"
                  >
                    Email
                  </label>
                  <br />
                  <input
                    id="emailInput"
                    name="email"
                    type="email"
                    value={userDetails.email}
                    className="profile-seetings-form-input"
                    onChange={handleChange}
                    disabled
                    style={{ cursor: "not-allowed" }}
                  />
                </div>
                <div className="profile-settings-form-label-and-input-container">
                  <label
                    htmlFor="genderInput"
                    className="profile-settings-form-label"
                  >
                    Gender
                  </label>
                  <br />
                  <select
                    id="genderInput"
                    name="gender"
                    className="profile-seetings-form-input"
                    value={userDetails.gender}
                    onChange={handleChange}
                  >
                    <option value="">{userDetails.gender}</option>
                    {userDetails.gender == "male" ? (
                      <option value="female">Female</option>
                    ) : (
                      <option value="male">Male</option>
                    )}
                  </select>
                </div>
                <div className="profile-settings-form-label-and-input-container">
                  <label
                    htmlFor="shopNameInput"
                    className="profile-settings-form-label"
                  >
                    Shop name
                  </label>
                  <br />
                  {currentUser.shopName ? (
                    <input
                      id="shopNameInput"
                      name="shopName"
                      type="text"
                      className="profile-seetings-form-input"
                      value={currentUser.shopName}
                      disabled
                      onChange={handleChange}
                      style={{ cursor: "not-allowed" }}
                    />
                  ) : (
                    <p
                      style={{
                        fontSize: ".9rem",
                        marginTop: "1rem",
                        color: "grey",
                        fontWeight: "500",
                      }}
                    >
                      You have not set up a shop yet. Please click{" "}
                      <Link
                        to="/dashboard/shop-registration"
                        style={{ color: "var(--orange-color)" }}
                      >
                        here
                      </Link>{" "}
                      to set up a shop
                    </p>
                  )}
                </div>
              </FormSectionContainer>
              {/*RIGHT SIDE OF FORM */}
              <FormSectionContainer>
                <div className="profile-settings-form-label-and-input-container">
                  <label
                    htmlFor="lastNameInput"
                    className="profile-settings-form-label"
                  >
                    Last Name
                  </label>
                  <br />
                  <input
                    id="lastNameInput"
                    name="lastName"
                    type="text"
                    value={userDetails.lastName}
                    className="profile-seetings-form-input"
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-settings-form-label-and-input-container">
                  <label
                    htmlFor="phoneNumberInput"
                    className="profile-settings-form-label"
                  >
                    Mobile Number
                  </label>
                  <br />
                  <input
                    id="phoneNumberInput"
                    name="phoneNumber"
                    type="tel"
                    placeholder={
                      userDetails.phoneNumber
                        ? userDetails.phoneNumber
                        : "Enter your phone number"
                    }
                    className="profile-seetings-form-input"
                    value={userDetails.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-settings-form-label-and-input-container">
                  <label
                    htmlFor="dateOfBirthInput"
                    className="profile-settings-form-label"
                  >
                    Date of Birth
                  </label>
                  <br />
                  <input
                    id="dateOfBirthInput"
                    name="dateOfBirth"
                    type="text"
                    disabled
                    className="profile-seetings-form-input"
                    value={currentUser.dateOfBirth}
                    onChange={handleChange}
                    style={{ cursor: "not-allowed" }}
                  />
                </div>

                <div className="profile-settings-form-label-and-input-container">
                  <label
                    htmlFor="addressInput"
                    className="profile-settings-form-label"
                  >
                    Residential Address
                  </label>
                  <br />
                  <textarea
                    id="addressInput"
                    name="address"
                    placeholder="32, Rasaq Eletu Street, Osapa London, Lagos"
                    className="profile-seetings-form-textarea"
                    value={userDetails.address}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </FormSectionContainer>
            </UserDetailsSection>

            <div
              className="profile-settings-user-details-form-buttons"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "40%",
                gap: "1rem",
              }}
            >
              <SmallButton button_text="Save changes" type="submit" />
              <SmallButton button_text="Cancel" type="button" whiteBg={true} />
            </div>
          </UserDetailsForm>
        </ProfileFormsContainer>
      </ProfileSettingsPageContainer>
    </>
  );
};
export default ProfileSettings;
