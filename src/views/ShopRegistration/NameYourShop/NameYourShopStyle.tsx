import styled from "styled-components";

const NameYourShopStyle = styled.div`
  display: flex;
  flex-direction: column;

  .shop-name-your-shop-inner {
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
  }
  .shop-name-your-shop-inner p {
    color: var(--normal-text-color);
  }
  .shop-name-your-shop-inner form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 2rem auto;
  }
  .name-your-shop-form-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  .name-your-shop-form-inner fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: none;
    @media (min-width: 768px) {
      flex-basis: 48%;
    }
  }
  .name-your-shop-form-inner fieldset label {
    font-weight: 600;
  }
  .name-your-shop-form-inner fieldset input {
    border: 1px solid var(--input-border-color);
    border-radius: 4px;
    padding: 0.5rem;
    width: 100%;
    height: 3rem;
  }
  .name-your-shop-form-inner fieldset input::placeholder {
    color: var(--input-placeholder-color);
  }

  .name-your-shop-form-inner fieldset select {
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
  }
`;

export default NameYourShopStyle;
