import styled from "styled-components";

export const CartContainer = styled.div`
  display: block;
  margin-top: 5vh;
  padding: 0 5rem;
  justify-content: center;
  align-items: center;
`;

export const CartContent = styled.div`
  display: flex;
  padding: 20px 0px 0px 0px;
  border-bottom: 2px solid #f0f0f0;
  gap: 380px;
`;
export const CartText = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const Cartleftcontainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const CartleftcontainerImg = styled.div`
  display: block;
  img {
    object-fit: contain;
    width: 200px;
  }
`;

export const CartleftcontainerText = styled.div`
  display: block;

  .ProductHeading {
    font-size: 24px;
    font-weight: 600;
    line-height: 33.6px;
  }

  .ProductDescription {
    font-size: 16px;
    opacity: 40%;
  }

  .ProductPrice {
    font-size: 16px;
    color: #219653;
  }
`;
