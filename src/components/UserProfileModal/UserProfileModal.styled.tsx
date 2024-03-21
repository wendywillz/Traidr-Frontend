import styled from "styled-components";

export const UserProfileModalContainer = styled.div`
  width: 20rem;
  height: 30rem;
  border-radius: 4px;
  position: fixed;
  overflow: hidden;
  top: 10%;
  right: 2rem;
  z-index: 1000;
  text-decoration: none;
  box-shadow: -5px 0px 10px 0px rgba(0, 0, 0, 0.1);
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  background-color: var(--orange-color);
  padding-bottom: 1.5vh;
  padding-left: 1rem;

  .user-profile-modal-user-image-container {
    margin-top: 1vh;
    background-color: grey;
    height: 7vh;
    border-radius: 100%;
    margin-right: 1rem;
    /* border: 1px solid pink; */
  }

  .user-profile-modal-user-image {
    width: 60px;
    height: 60px;
  }

  .user-profile-modal-user-info-container {
    /* border: 3px solid green;    */
    width: 100%;
    a {
      text-decoration: none;
    }
  }

  .user-profile-modal-user-name {
    margin: 1vh 0;
    font-size: 1.5vw;
  }

  .user-profile-modal-user-visit-profile {
    font-size: 1.1vw;
    font-weight: 300;
    color: white;
    margin-top: 1vh;
  }
  .user-profile-modal-user-visit-profile:hover {
    font-size: 1.2vw;
    font-weight: 350;
  }
`;

export const ModalBody = styled.div`
  background-color: white;
  height: 30vh;
  padding: 1vh 1rem;
  /* border: 3px solid gold; */
  a {
    text-decoration: none;
  }
  .user-profile-modal-link-container {
    margin-bottom: 2vh;
  }

  .user-profile-modal-link-text-and-icon-container {
    display: flex;
    margin: 1.1vh 0;
  }

  .user-profile-modal-link-icon {
    width: 1.5rem;
    height: 3vh;
    margin-right: 1rem;
  }

  .user-profile-modal-link-text {
    color: black;
    font-size: 1vw;
    margin-top: 0.5vh;
    text-decoration: none;
  }
  .user-profile-modal-link-text:hover {
    font-size: 1.1vw;
    color: #e04f16;
  }
`;
