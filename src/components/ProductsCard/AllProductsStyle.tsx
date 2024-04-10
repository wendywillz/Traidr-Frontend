import styled from "styled-components";

export const AllProductsCardContainer = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  

  .dashboard-add-to-cart-button{
    margin-top: -2vh;
    margin-left: 4rem;
    /* visibility: hidden; */
  }
`

export const AllProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  /* min-height: 300px;
  max-height: 300px; */
  margin: 1rem 0;
  cursor: pointer;
  max-width: 450px;
  position: relative;
  z-index: 0;
  
  

  .each-product-image{
    min-height: 250px;
    max-height: 250px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f28c;;
    border-radius: 5px;
    overflow: hidden;
    // padding: 5rem;
  }
  .each-product-image img{
    object-fit: contain;
    /* width: 100%;
    height: 100%; */
  }

  .dashboard-product-image{
    width: 100vw;
    height: 30vh
  }

  .each-product-title {
    font-weight: 600;
    font-size: 1.3vw;
    margin-top: 0.5vh;
  }
  .each-product-description {
    font-size:1vw;
    margin-top: 0vh;
    color: var(--normal-text-color);
  }
  .each-product-price {
    color: var(--price-green-color);
    font-weight: 600;
    font-size: 1.2vw;
  }
`;

export const CartWishlistBtns = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-left: -4.5vw;
margin-top: 1vh;

/* margin-left: 10vw; */
/* margin-top: -2.5vh; */
/* margin-left: 2vw; */

`


