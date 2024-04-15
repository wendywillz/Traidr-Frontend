import styled from "styled-components";

export const CartCounterWholecontainer = styled.div`
  display: flex;
  position: relative;

  .cart-counter-icon-container {
  }

  .cart-counter-icon {
    color: grey;
    font-size: 1.5rem;
  }

  .cart-counter-number {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: var(--orange-color);
    color: white;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
  }
`;
