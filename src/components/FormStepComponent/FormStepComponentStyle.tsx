import styled from "styled-components";

const FormStepComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .form-step-component {
    width: 100%;
    position: relative;
    margin: 2rem auto;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 768px) {
      width: 90%;
    }
  }

  .form-step {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    flex-basis: 25%;
    position: relative;
  }

  .base-line {
    width: 75%;
    height: 2px;
    position: absolute;
    border: none;
    top: 20%;
    right: 0;
    left: 0;
    margin: auto;
    background-color: var(--orange-color);
  }
  .step-icon {
    font-size: 2rem;
    color: var(--orange-color);
  }
  .form-step p {
    color: var(--normal-text-color);
    font-size: 1rem;
    text-align: center;
  }
`;

export default FormStepComponentWrapper;
