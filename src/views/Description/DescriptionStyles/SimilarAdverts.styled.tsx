import styled from "styled-components";

export const SimilarProductsMain = styled.div`
  width: 100%;
`;

export const SimilarProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Four items per row */
  gap: 2rem; /* Adjust the gap as needed for spacing between items */
  margin-top: 5vh;
  padding: 1rem 1rem;
  width: 100%;
`;

export const AllProductsContainer2 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  gap: 2rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  // border: 2px solid #e04f16;
  /* margin-left: 30%; */
`;
