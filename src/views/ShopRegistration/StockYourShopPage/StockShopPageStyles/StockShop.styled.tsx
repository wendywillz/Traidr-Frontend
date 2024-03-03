import styled from "styled-components";

//This is for the main part of the page (i.e excludes the header)
export const StockShopMain = styled.div`
  margin-top: 1rem;
  .stock-your-shop-inner {
    padding: 0 2rem;
    margin: 1rem auto;
    @media (min-width: 768px) {
      width: 80%;
    }
    @media (min-width: 1500px) {
      max-width: 1500px;
    }
  }
`;

export const StockShopTimeline = styled.div`
  /* border: 1px solid pink; */
  width: 58rem;
  margin-left: 5rem;
  margin-bottom: 10vh;
  margin-top: 5vh;

  .stock-shop-page-timeline-sections {
    display: flex;
    justify-content: space-between;
    font-size: 1vw;
    font-weight: 300;
  }

  .stock-shop-page-timeline-complete-section {
    color: #e04f16;
    font-size: 1vw;
  }

  .stock-shop-page-timeline-incomplete-section {
    color: grey;
    opacity: 40%;
    font-size: 1vw;
  }
`;

export const PageDescriptionStyle = styled.div`
  width: 100%;
  margin: 1rem auto;
  .stock-shop-page-instruction-title {
    text-align: center;
  }
  .stock-shop-page-instruction-description {
    color: var(--normal-text-color);
    margin: 1.5rem 0;
  }
`;

export const StockShopMainForm = styled.form`
  background-color: white;
  width: 70rem;
`;

export const BaseButtons = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid purple; */

  .stock-shop-page-cancel-button {
    width: 7rem;
    height: 5vh;
    background-color: white;
    color: #e04f16;
    border: 1px solid #e04f16;
    border-radius: 0.3rem;
    font-size: 1vw;
    font-weight: 500;
  }

  .stock-shop-page-save-and-continue-button {
    width: 10rem;
    height: 5vh;
    background-color: #e04f16;
    color: white;
    border-radius: 0.3rem;
    font-size: 0.9vw;
    font-weight: 500;
    border: none;
  }
`;
