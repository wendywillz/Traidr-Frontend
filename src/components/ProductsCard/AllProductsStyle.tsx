import styled from "styled-components";
export const AllProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  min-height: 350px;
  max-height: 350px;
  margin: 1rem 0;
  cursor: pointer;
  max-width: 450px;

  .each-product-image {
    min-height: 250px;
    max-height: 250px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
    border-radius: 5px;
    overflow: hidden;
  }
  .each-product-image img {
    object-fit: contain;
    height: 100%;
  }
  .each-product-title {
    font-weight: 600;
  }
  .each-product-description {
    margin-top: 0.5rem;
    color: var(--normal-text-color);
  }
  .each-product-price {
    color: var(--price-green-color);
    font-weight: 600;
  }
`;
