import styled from "styled-components";

const SuccessModalMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  background-color: #000;
  backdrop-filter: blur(10px);

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
    min-height: 60%;
    width: 40%;
    padding: 2rem;

    border-radius: 10px;
    background-color: #fff;
    margin: 0 auto;
    boarder-radius: 5px;
  }

  .modal-button {
    background-color: var(--orange-color);
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 3rem;
    cursor: pointer;
    margin: 0.5rem 0;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
  }

  .modal-title {
    color: rgba(224, 79, 22, 1);
    width: 100%;
    font-weight: normal;
    text-align: center;
    font-size: 2rem;
    padding-bottom: 3rem;
  }

  .modal-button:hover {
    background-color: rgba(224, 79, 22, 0.8);
  }
  .modal-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-message {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
  }
  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export default SuccessModalMainWrapper;
