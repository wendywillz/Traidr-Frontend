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
  .landing-page-second-section-left-wrapper h2 {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }
  .landing-page-second-section-left-wrapper h2 span {
    display: flex;
    align-items: center;
    justify-content: stretch;
    width: 4.5rem;
    margin-left: 0.5rem;
    margin-right: 1.5rem;
    img {
      margin-top: -5px;
      height: 150%;
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
  .trending-sales-view-all-products{
    color: white;
    background-color: #E04F16;
    width: 12vw;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 7vw;
    border-radius: 8px;
    text-decoration: none;
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

// export const PopUpMessageWrapper = styled.div`
//   display: flex;
//   align-items: stretch;
//   justify-content: space-between;
//   min-height: 2rem;
//   min-width: 20vw;
//   border-radius: 4px;
//   overflow-y: hidden;
//   box-sizing: content-box;
//   padding: 0;
//   background-color: #00af72;
//   box-shadow: 15px 15px 15px #04513760;
//   animation: animateMe 1s forwards;
//   position: fixed;
//   top: 10%;
//   right: 0;
//   z-index: 10000;

//   &::after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     height: 5px;
//     width: 100%;
//     background-color: #00af72;
//     animation: animateAfter 1500ms forwards;
//   }
//   @media screen and (max-width: 623px) {
//     width: 60%;
//   }

//   @keyframes animateMe {
//     0% {
//       opacity: 0;
//       transform: translateY(-30px);
//     }

//     100% {
//       opacity: 1;
//       transform: translateY(0px);
//     }
//   }
//   @keyframes slide-out {
//     0% {
//       opacity: 1;
//       transform: translateY(0);
//     }

//     100% {
//       opacity: 0;
//       transform: translateY(-30px);
//       display: none;
//     }
//   }

//   .after-error::after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     height: 5px;
//     width: 100%;
//     background-color: #ff0173;
//     animation: animateAfter 8s forwards;
//   }

//   @keyframes animateAfter {
//     0% {
//       width: 100%;
//     }

//     100% {
//       width: 0%;
//     }
//   }
//   .icon-wrapper {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     min-height: 100%;
//     width: 20%;
//     color: #ffffff;
//   }

//   .success-icon {
//     font-size: 2rem;
//   }

//   .error-icon {
//     font-size: 2rem;
//   }

//   .message-wrapper {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     min-height: 100%;
//     padding: 0.5rem 1rem;
//     width: 80%;
//     color: #ffff;
//   }

//   .success-message {
//     font-weight: 400;
//     font-size: 1.2rem;
//   }
//   .display-pop-up-message {
//     font-weight: 300;
//     text-wrap: wrap;
//     line-break: normal;
//     font-size: 1rem;
//     color: #959595;
//   }
// `;
