import styled from "styled-components";

export const UserProfileModalContainer = styled.div`
  background-color: white;
  width: 20rem;
  min-height: 45vh;
  border-radius: 4px;
  position: fixed;
  overflow: hidden;
  padding-bottom: 1rem;
  top: 10%;
  right: 2rem;
  z-index: 1000;
  text-decoration: none;
  box-shadow: -5px 0px 10px 0px rgba(0, 0, 0, 0.1);
  animation: modal-animation 0.3s ease-in-out;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  @keyframes modal-animation {
    0% {
      opacity: 0;
      height: 1rem;
    }
    100% {
      opacity: 1;
      height: 45vh;
      min-height: 45vh;
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--orange-color);
  padding: 1rem;

  .user-profile-modal-user-image-container {
    margin-top: 1vh;
    background-color: grey;
    height: 7vh;
    border-radius: 100%;
    margin-right: 1rem;
    /* border: 1px solid pink; */
  }

  .user-profile-modal-user-info-container {
    /* border: 3px solid green;    */
    width: 100%;
    a {
      text-decoration: none;
    }
  }

  .user-profile-modal-user-name {
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1.1rem;
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
  height: 35vh;
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
