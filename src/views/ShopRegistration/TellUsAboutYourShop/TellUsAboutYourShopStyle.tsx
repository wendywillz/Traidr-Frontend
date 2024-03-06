import styled from "styled-components";

const TellUsAboutYourShop = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  margin: 1rem auto;
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1500px) {
    max-width: 1500px;
  }
  .inner-form-wrapper {
    width: 100%;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    .inner-form-wrapper-heading {
      h4 {
        margin-bottom: 1rem;
      }
      p {
        color: var(--normal-text-color);
      }
    }
  }
  .inner-form-detail-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  .legal-business {
    font-weight: 700;
  }
  .legal-business-description {
    color: var(--normal-text-color);
  }
  @media (min-width: 768px) {
    .legal-business-adress-wrapper {
      flex-basis: 30%;
    }
    .form-detail-wrapper {
      flex-basis: 50%;
1;
    }
  }

  .form-detail-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .form-detail-wrapper fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: none;
    @media (min-width: 768px) {
      flex-basis: 48%;
    }
  }
  .form-detail-wrapper fieldset label {
    font-weight: 600;
  }
  .form-detail-wrapper fieldset input {
    border: 1px solid var(--input-border-color);
    border-radius: 4px;
    padding: 0.5rem;
    width: 100%;
    height: 3rem;
  }
  .submit-button-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    width: 100%;
  }
`;

export default TellUsAboutYourShop;
