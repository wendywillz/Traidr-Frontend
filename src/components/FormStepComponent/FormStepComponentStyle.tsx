import styled from "styled-components";

const FormStepComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .form-step-component {
    width: 100%;
    margin: 2rem auto;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: stretch;
    @media (min-width: 768px) {
      width: 75%;
    }
  }
  .form-step-component > * {
    flex: 1;
  }

  .form-step {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    flex-basis: 25%;
    position: relative;
  }

  .form-step-start {
    align-items: flex-start;
  }
  .form-step-end {
    align-items: flex-end;
  }
  .first-wrapper {
    position: relative;
  }
  .second-wrapper {
    position: relative;
  }
  .base-line {
    width: 145%;
    height: 2px;
    position: absolute;
    border: none;
    top: 20%;
    right: 0;
    left: 7%;
    margin: auto;
  }
  .base-line-orange {
    background-color: var(--orange-color);
  }
  .base-line-grey {
    background-color: grey;
  }
  .base-line2 {
    width: 150%;
    height: 2px;
    position: absolute;
    border: none;
    top: 20%;
    left: 53%;
  }
  .step-icon {
    font-size: 2rem;
    color: var(--orange-color);
    background-color: white;
  }

  .form-step p {
    color: var(--normal-text-color);
    font-size: 1rem;
    text-align: center;
  }
  .grey-color {
    color: grey;
    font-size: 2rem;
    //box-shadow: 5px 5px 10px #00000080;
  }
`;

export default FormStepComponentWrapper;
