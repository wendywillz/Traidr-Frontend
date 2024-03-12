import styled from "styled-components";

export const LandingPageMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 2rem;
  min-height: 80vh;

  .landing-page-inner-body-wrapper {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1500px) {
      max-width: 1500px;
    }
  }
  .landing-page-first-section-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
    @media (min-width: 1400px) {
      flex-direction: row;
      gap: 2rem;
      justify-content: space-between;
    }
  }
  .landing-page-left-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
    @media (min-width: 1400px) {
      flex-basis: 50%;
      text-align: left;
    }
  }
  .landing-page-left-wrapper h1 {
    span {
      color: var(--orange-color);
    }
  }
  .landing-page-left-wrapper p {
    color: var(--normal-text-color);
  }
  .input-search-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--normal-text-color);
    border-radius: 4px;
    height: 3rem;
    width: 100%;
  }
  .input-search-wrapper input {
    border: none;
    outline: none;
    padding: 0.8rem 1rem;
    flex-basis: 70%;
    &::placeholder {
      color: var(--input-placeholder-color);
    }
    &:focus {
      border: none;
    }
  }
  .input-search-wrapper button {
    background-color: var(--orange-color);
    color: white;
    flex-basis: 30%;
    height: 100%;
    width: 100%;
    border: none;
    padding: 0.8rem 2rem;
    cursor: pointer;
  }
  .landing-page-right-wrapper {
    justify-content: center;
    align-items: center;
    display: none;
    @media (min-width: 1400px) {
      display: flex;
      width: 100%;
      flex-basis: 50%;
    }
  }
  .landing-page-right-wrapper img {
    max-width: 100%;
    object-fit: cover;
    height: auto;
  }

  //   second section
  .landing-page-second-section-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
    @media (min-width: 1400px) {
      flex-direction: row;
      gap: 2rem;
      justify-content: space-between;
      align-items: stretch;
    }
  }
  .landing-page-second-section-left-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
    @media (min-width: 1400px) {
      flex-basis: 45%;
      text-align: left;
    }
  }
  .landing-page-second-section-left-wrapper h1 {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }
  .landing-page-second-section-left-wrapper h1 span {
    display: flex;
    align-items: center;
    justify-content: stretch;
    width: 4.5rem;
    margin-left: 0.5rem;
    margin-right: 4rem;
    img {
      margin-top: 5px;
      height: 200%;
      object-fit: cover;
    }
  }
  .why-use-traidr-wrapper {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
  .each-why-use {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .why-use-image-top img {
    width: 3rem;
  }
  .why-use-text p {
    color: var(--normal-text-color);
    text-align: left;
  }
  .landing-page-second-section-right-wrapper {
    display: none;
    @media (min-width: 1400px) {
      display: flex;
      flex-basis: 55%;
    }
  }
  .landing-page-second-section-right-wrapper img {
    width: 100%;
    object-fit: cover;
  }

  // trending sales section
  .trending-sales-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
  }
  .trending-sales-section-heading {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
  }
  .trending-sales-section-heading h1 {
    color: var(--normal-text-color);
    text-align: left;
  }
  .trending-sales-product-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;


