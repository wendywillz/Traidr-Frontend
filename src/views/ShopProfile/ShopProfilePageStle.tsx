import styled from "styled-components";

export const ShopProfileMainWrapper = styled.div`
  padding: 0rem 3rem;
  min-height: 80vh;

  .shop-profile-product-logo {
    img {
      width: 15rem;
      height: 15rem;
      border: 1px solid var(--normal-text-color);
      border-radius: 5px;
    }
  }

  .shop-profile-product-logo {
    display: flex;
    margin: 5rem 0 5rem;
  }

  .shop-profile-productname {
    margin-left: 2rem;
    align-self: center;
    h3 {
      color: var(--black-color);
      font-weight: 200;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    input {
      width: 30rem;
      height: 2.5rem;
      border: none;
      outline: none;
      // padding: 0 1rem;
    }
    input:focus {
      border: 1px solid var(--normal-text-color);
      outline: 1px solid var(--normal-text-color);
      border-radius: 5px;
    }
    input::placeholder {
      color: var(--normal-text-color);
      font-weight: 200;
      font-size: 1.5rem;
      display: inline-block;
      align-items: center;
    }
  }

  .shop-profile-product-uploads {
    h3 {
      color: var(--black-color);
      font-weight: 200;
      margin-bottom: 1rem;
    }
  }

  .shop-profile-product-uploads-inner {
    border: 1px solid var(--normal-text-color);
    border-radius: 5px;
    padding: 3rem 2rem 3rem 3rem;
    h3 {
      color: var(--black-color);
      font-weight: 200;
    }
  }

  .shop-profile-product-uploads-inner-each {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    p {
      margin-bottom: 2rem;
      color: var(--normal-text-color);
      // width: 25rem;
    }
  }

  .shop-profile-product-uploads-list {
    ul {
      color: var(--normal-text-color);
      margin-left: 1.5rem;
    }
  }

  .shop-profile-photos {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 1rem;
    justify-content: space-between;
    background-color: green;
    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    p {
      color: var(--black-color);
      font-weight: 400;
    }
  }

  .shop-profile-photos-each {
    border-radius: 5px;
    flex-direction: column;
    outline: 1px solid var(--normal-text-color);
    img {
      flex-basis: 90%;
      max-width: 100%;
      height: 80%;
      min-height: 80%;
      max-height: 80%;
      flex: 1;
    }
    p {
      font-size: 1rem;
      margin-left: 0.3rem;
    }
  }

  .shop-profile-photos-each-2 {
    padding: 2.5rem;
    border-radius: 5px;
    outline: 1px solid var(--normal-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 7rem;
      font-weight: 200;
      margin-bottom: -3rem;
    }
    p {
      align-items: center;
      font-size: 1rem;
    }
  }

  .shop-profile-upload-btn {
    display: flex;
    justify-content: flex-start;
    button {
      background-color: var(--orange-color);
      color: #fff;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      height: 3rem;
      cursor: pointer;
      margin: 2rem 0 7rem 0;
      padding: 0 2rem;
      transition: all 0.3s ease-in-out;
    }
  }

  .upload-box-content {
    border-radius: 5px;
    outline: 1px solid var(--normal-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span {
      width: 10rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`;
