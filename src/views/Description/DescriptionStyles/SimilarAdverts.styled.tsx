import styled from "styled-components";

export const SimilarProductsMain = styled.div`
  width: 100%;
`;


export const SimilarProductsContainer = styled.div`
    display:flex;
    flex-direction: row;
    // flex-wrap: wrap;
    margin-top: 5vh;
    padding: 0 5rem;
    background-color: red;
    border: 10px solid purple;
    width: 100%;
    /* margin-left: 30%; */
`

export const AllProductsContainer2 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 2px solid purple;
  /* margin-left: 30%; */
`;