import styled from "styled-components";

const NameYourShopStyle = styled.div`
  display: flex;
  flex-direction: column;

  .shop-name-your-shop-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin: 2rem auto;
    @media (min-width: 768px) {
      width: 90%;
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
    width: 80%;
    margin: 2rem auto;
    gap: 2rem;
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  .shop-name-your-shop-inner form fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: none;
    @media (min-width: 768px) {
      flex-basis: 45%;

    }
  }
  .shop-name-your-shop-inner form fieldset label {
    font-weight: 600;
  }
  .shop-name-your-shop-inner form fieldset input {
    border: 1px solid var(--input-border-color);
    border-radius: 4px;
    padding: 0.5rem;
    width: 100%;
    height: 3rem;
  }
  .shop-name-your-shop-inner form fieldset input::placeholder {
    color: var(--input-placeholder-color);
  }

  .shop-name-your-shop-inner form fieldset select {
    border: 1px solid var(--input-border-color);
    border-radius: 4px;
    padding: 0.5rem;
    width: 100%;
    height: 3rem;
  }
`;

export default NameYourShopStyle;
