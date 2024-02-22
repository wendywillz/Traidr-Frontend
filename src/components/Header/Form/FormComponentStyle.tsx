import styled from "styled-components";
import formBackground from "../../assets/form-background-image.png";
const FormComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  background-image: url(${formBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .form-component-inner-body-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
    min-height: 80%;
    padding: 3.5rem;
    border-radius: 5px;
    background-color: #fff;
  }
  .form-component-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
  }
  .form-component-logo-wrapper {
    flex-basis: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-component-title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .form-component {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .form-component fieldset {
    width: 100%;
    border: none;
    margin: 1rem 0;
  }
  .form-component fieldset label {
    font-size: 1rem;
    font-weight: 400;
    display: block;
    margin-bottom: 0.5rem;
  }
  .form-component fieldset input {
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid var(--input-border-color);
    outline: none;
    &:focus {
      border: 1px solid var(--orange-color);
    }
    &::placeholder {
      color: var(--input-placeholder-color);
    }
  }
  .form-component .error-message {
    color: red;
    font-size: 0.9rem;
    font-weight: 400;
  }
  .forgot-password {
    margin-top: 1rem;
    color: var(--orange-color);
    text-decoration: underline;
  }
  .or-wrapper {
    width: 100%;
    margin-top: 1rem;
  }
  .or-wrapper img {
    width: 100%;
    object-fit: cover;
  }
`;

export default FormComponentStyle;
