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
      align-items: stretch;
    }
  }
  .name-your-shop-form-inner > * {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .left-name-yourshop,
  .right-name-your-shop {
    flex: 1;
    @media (min-width: 768px) {
      flex-basis: 48%;
      height: 100%;
      min-width: 48%;
      max-width: 48%;
    }
  }
  .right-name-your-shop {
    height: 100%;
  }
  .right-name-your-shop fieldset {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: none;
  }
  .right-name-your-shop fieldset textarea {
    width: 100%;
    min-height: 15rem;
    border: 1px solid var(--input-border-color);
    border-radius: 4px;
    padding: 0.5rem;
  }
  .left-name-yourshop fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: none;
  }
  .left-name-yourshop fieldset label,
  .right-name-your-shop fieldset {
    font-weight: 600;
  }
  .left-name-yourshop fieldset input {
    border: 1px solid var(--input-border-color);
    border-radius: 4px;
    padding: 0.5rem;
    width: 100%;
    height: 3rem;
  }
  .left-name-yourshop fieldset input::placeholder {
    color: var(--input-placeholder-color);
  }

  .left-name-yourshop fieldset select {
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
