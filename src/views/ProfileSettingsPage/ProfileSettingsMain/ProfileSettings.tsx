//style imports
import {
  ProfileSettingsPageContainer,
  ProfileFormsContainer,
  ChangePictureForm,
  UserDetailsForm,
  FormSectionContainer,
  UserDetailsSection
} from "./ProfileSettingsPage.styled";

//component imports
import ProfileNavigation from "../UserProfileNavigation/ProfileNavigation";
import Header from "../../../components/Header/Header";

//package imports
import { BsCameraFill, BsPersonCircle } from "react-icons/bs";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios"

interface UserDetails{
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  address: string;
  shopName: string;
  profilePic: string| Blob| null| File;
}



export const ProfileSettings = () => {

  //Logic for handling the photo upload    
  const [userPic, setUserPic] = useState<File | null>(null);
  const [displayedProfilePic, setDisplayedProfilePic] = useState<string>("") //This is ONLY FOR THE DISPLAYED PIC. 


  //Logic for handling photo upload and changing the displayed picture
  const handleChangeProfilePic = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const uploadedPhoto = event.target.files[0];
    const displayedPhoto = event.target.files[0];
    if (uploadedPhoto) setUserPic(uploadedPhoto)
    // console.log(photoFile);




    //allowing the selected picture to show
    const reader = new FileReader();
    reader.onload = () => {
      setDisplayedProfilePic(reader.result as string);
    };
    reader.readAsDataURL(displayedPhoto);
  };


  const handlePhotoUpload = async (event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    //adding data to form
    const userPicFormData = new FormData()
    userPicFormData.append("profilePic", userPic as Blob)
    console.log(`PHOTO ADDED`);
    console.log( userPic);

    //Sending uploaded photo to backend
    try {
      await axios.post('/user/edit-profile/profile-picture', {data: userPicFormData})
      console.log(`Profile picture has been successfully changed`)
      } catch (error) {
      console.error(`Error uploading photo: ${error}`)
      }

  }





  //Logic for Handling User Details
  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    address: "",
    shopName: "",
    profilePic: userPic
  });

  

  //submitting the  user details
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`USER DETAILS ADDED`);
    console.log(userDetails);

    //adding data to form
    const userDetailsData = new FormData()
    userDetailsData.append("firstName", userDetails.firstName)
    userDetailsData.append("lastName", userDetails.lastName)
    userDetailsData.append("email", userDetails.email)
    userDetailsData.append("phoneNumber", userDetails.phoneNumber)
    userDetailsData.append("gender", userDetails.gender)
    userDetailsData.append("address", userDetails.address)
    userDetailsData.append("shopName", userDetails.shopName)
    userDetailsData.append("profilePic",userPic as Blob )
    console.log(`USER DETAILS DATA:`);
    console.log(userDetailsData);


    //Sending listing details to backend
    try {
      await axios.post('/user/edit-profile/details', {data: userDetailsData})
      console.log(`User Details have been sucessfully submitted`);
       } catch (error) {
      console.error(`Error submitting user details: ${error}`)
        }

}

  
const handleChange = (e)=>{
  setUserDetails({...userDetails, [e.target.name]:e.target.value})
}




  return (
    <ProfileSettingsPageContainer>
      <Header/>

      <ProfileFormsContainer>
        <ProfileNavigation />
        <ChangePictureForm>
          <div className="profile-settings-user-image-and-camera-icon-container">
            {displayedProfilePic? <img src={displayedProfilePic} className="profile-settings-user-image"/>: <BsPersonCircle size={"9vw"}/>}
            {/* <BsPersonCircle size={"9vw"} /> */}
            <label htmlFor="profilePictureInput" className="profile-settings-change-photo-label">
              <BsCameraFill size={"1.7vw"} color="white" />
            </label>
            <input id="profilePictureInput" name="profilePicture" type="file" accept="image/*" className="profile-settings-change-photo-input" onChange={handleChangeProfilePic} />
          </div>

          <div className="profile-settings-change-photo-buttons-container">
            <button className="profile-settings-page-upload-photo-button" onClick={()=> handlePhotoUpload}>
              Upload New
            </button>
            <button className="profile-settings-page-delete-photo-button">
              Delete Photo
            </button>
          </div>
        </ChangePictureForm>

        <UserDetailsForm onSubmit={handleFormSubmit}>
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
                  placeholder="Jane"
                  className="profile-seetings-form-input"
                  value={userDetails.firstName}
                  onChange={handleChange} />
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
                  placeholder="JaneDoe@email.com"
                  className="profile-seetings-form-input"
                  value={userDetails.email}
                  onChange={handleChange} />
              </div>
              <div className="profile-settings-form-label-and-input-container">
                <label htmlFor="genderInput" className="profile-settings-form-label">
                  Gender
                </label>
                <br />
                <select id="genderInput" name="gender" className="profile-seetings-form-input" value={userDetails.gender} 
                onChange={handleChange}
                >
                  <option value="">--select--</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                  <option value="prefer not to say">Prefer not to say</option>
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
                <input
                  id="shopNameInput"
                  name="shopName"
                  type="text"
                  placeholder="Awesomeness Shop"
                  className="profile-seetings-form-input"
                  value={userDetails.shopName}
                  onChange={handleChange} />
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
                  placeholder="Doe"
                  className="profile-seetings-form-input"
                  value={userDetails.lastName}
                  onChange={handleChange} />
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
                  placeholder="07034249775"
                  className="profile-seetings-form-input"
                  value={userDetails.phoneNumber}
                  onChange={handleChange} />
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

          <div className="profile-settings-user-details-form-buttons">
            <button className="profile-settings-page-save-button">
              Save Changes
            </button>
            <button className="profile-settings-page-cancel-button">
              Cancel
            </button>
          </div>
        </UserDetailsForm>
      </ProfileFormsContainer>
    </ProfileSettingsPageContainer>
  );
};
export default ProfileSettings;