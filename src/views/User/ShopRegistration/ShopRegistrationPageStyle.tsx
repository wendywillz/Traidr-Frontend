import styled from "styled-components";

export const NextIcon = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  margin: 1rem;
  background-color: #ffff;
  .next-icon {
    font-size: 2rem;
    color: var(--orange-color);
    cursor: pointer;
  }
`;

export const PrevIcon = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  margin: 1rem;
  background-color: #ffff;
  drop-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  .prev-icon {
    font-size: 2rem;
    color: var(--orange-color);
    cursor: pointer;
  }
`;
