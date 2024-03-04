import styled from "styled-components";

export const FormContainer = styled.div`
  width: 70rem;
  padding: 7vh 2.5rem;
  border: 1px solid grey;
  border-radius: 1rem;
  margin-bottom: 6vh;

  .submit-button-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
  }
`;

export const FormTitleAndDescription = styled.div`
  /* border: 1px solid orange; */
  margin-bottom: 3vh;

  .stock-shop-page-form-title {
    font-size: 1.5vw;
    margin-bottom: 0.2vh;
    /* border: 1px solid green; */
  }

  .stock-shop-page-form-description {
    font-size: 1vw;
    font-weight: 400;
    color: grey;
    /* border: 1px solid blue; */
  }
`;

export const ListingDetailsForm = styled.div`
  /* border: 1px solid red; */

  .stock-shop-page-listing-details-form-field {
    display: flex;
    margin-bottom: 2vh;
  }

  .stock-shop-label-title-and-description {
    margin-right: 2rem;
    width: 11rem;
    /* border: 1px solid orange; */
  }
  .stock-shop-page-listing-details-label {
    /* border: 1px solid green; */
    margin-right: 7rem;
    font-size: 1vw;
    font-weight: 700;
  }
  .stock-shop-page-listing-details-label-description {
    font-size: 0.9vw;
    font-weight: 300;
    width: 11rem;
    color: grey;
    margin-top: 1vh;

    /* border: 1px solid pink; */
  }

  .stock-shop-page-listing-details-input {
    border: 1px solid var(--input-border-color);
    border-radius: 4px;
    padding: 0.5rem;
    width: 45rem;
    height: 3rem;
  }

  .stock-shop-page-listing-details-textarea {
    width: 45rem;
    height: 27vh;
    margin-top: 3vh;
    border: 1px solid grey;
    color: grey;
    border-radius: 0.5rem;
    /* opacity: 30%; */
  }
`;

export const ShippingDetailsForm = styled.div`
  /* border: 1px solid red; */
  height: 30vh;
  margin-top: 4vh;

  .stock-shop-page-shipping-details-form-field {
    /* border: 1px solid blue; */
    height: 10vh;
    margin-bottom: 2vh;
  }

  .stock-shop-page-shipping-details-label {
    font-size: 1vw;
    font-weight: 700;
  }

  .stock-shop-page-shipping-details-input {
    width: 30rem;
    height: 5vh;
    margin-top: 1vh;
    border: 1px solid grey;
    color: grey;
    border-radius: 0.5rem;
    opacity: 30%;
  }
`;
