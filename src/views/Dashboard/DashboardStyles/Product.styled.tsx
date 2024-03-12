import styled from "styled-components";

export const ProductNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3vh;
  width: 15rem;
  margin-top: 0.3vh;
  /* border: 2px solid pink; */

  //This is for the name of the product, just underneath the picture
  .user-dashboard-individual-product-name {
    font-size: 1vw;
    font-weight: 700;
    color: Black;
    /* padding-top:-1vh; */
    border: none;
    margin-top: 0vh;
  }

  //This is for the heart icon
  .user-dashboard-heart-icon {
    /* margin-left: 0.3rem; */
    width: 1rem;
    height: 1.7vh;

    padding-top: 0.5vh;
    /* border: none; */
  }
`;

export const AllProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid purple; */
  /* margin-left: 30%; */
`;
