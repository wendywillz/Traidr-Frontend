import styled from "styled-components";

export const NextIcon = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  margin: 1rem;
  background-color: var(--orange-color);
  .next-icon {
    font-size: 2rem;
    color: var(--normal-text-color);
    cursor: pointer;
  }
`;

export const PrevIcon = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  margin: 1rem;
  background-color: var(--orange-color);
  .prev-icon {
    font-size: 2rem;
    color: var(--normal-text-color);
    cursor: pointer;
  }
`;
