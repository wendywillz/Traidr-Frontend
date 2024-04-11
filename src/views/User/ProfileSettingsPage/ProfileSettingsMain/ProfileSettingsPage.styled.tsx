import styled from "styled-components";

export const ProfileSettingsPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const ProfileFormsContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const ChangePictureForm = styled.div`
  /* border: 2px solid pink; */
  display: flex;
  margin-bottom: 4vh;

  .profile-settings-user-image-and-camera-icon-container {
    display: flex;
    /* border: 1px solid green; */
  }
  .profile-settings-user-image {
    width: 9vw;
    height: 9vw;
    border-radius: 9vw;
  }

  .profile-settings-change-photo-label {
    width: 2.7vw;
    height: 2.7vw;
    border-radius: 2.7vw;
    border: 2px solid white;
    background-color: #e04f16;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10vh 0vw 0vh -1.8vw;
  }

  .profile-settings-change-photo-input {
    visibility: hidden;
    width: 0vw;
  }

  .profile-settings-change-photo-buttons-container {
    margin: 5vh 0vw 0vh 5vw;
    /* display:flex; */
  }

  .profile-settings-page-delete-photo-button {
    color: #e04f16;
    background-color: white;
    border: 1px solid #e04f16;
    border-radius: 8px;
    width: 10vw;
    height: 6.5vh;
    font-size: 1.15vw;
  }

  .profile-settings-page-upload-photo-button {
    color: white;
    background-color: #e04f16;
    border: none;
    border-radius: 8px;
    width: 10vw;
    height: 6.5vh;
    margin-right: 1vw;
    font-size: 1.15vw;
  }
`;

export const UserDetailsForm = styled.form`
  .profile-settings-user-details-form-buttons {
    /* border: 2px solid red; */
    display: flex;
    margin-top: 6vh;
  }

  .profile-settings-page-save-button {
    color: white;
    background-color: #e04f16;
    border: none;
    border-radius: 8px;
    width: 10vw;
    height: 6.5vh;

    font-size: 1.15vw;
  }

  .profile-settings-page-cancel-button {
    color: #e04f16;
    background-color: white;
    border: 1px solid #e04f16;
    border-radius: 8px;
    width: 10vw;
    height: 6.5vh;
    font-size: 1.15vw;
  }
`;

export const UserDetailsSection = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const FormSectionContainer = styled.div`
  /* border: 2px solid violet; */
  width: 37vw;
  height: 44vh;
  /* padding: 2vh 2rem; */
  margin-right: 5vw;

  .profile-settings-form-label-and-input-container {
  }

  .profile-settings-form-label {
    color: black;
    font-size: 1.25vw;
    font-weight: 500;
  }

  .profile-seetings-form-input,
  .profile-seetings-form-textarea {
    margin-top: 1vh;
    margin-bottom: 2vh;
    width: 35vw;
    height: 5.5vh;
    padding: 1vh 1vw;
    border: 0.1px solid gray;
    border-radius: 0.5rem;
  }

  .profile-seetings-form-textarea {
    height: 7vh;
  }
`;
