import styled from "styled-components";

export const DataCardContainer = styled.div`
  border: 1px solid #97979733;
  border-radius: 4px;
  width: 17rem;
  min-height: 149px;
  padding: 0;
  background-color: white;
  .upper-card-wrapper {
    padding: 1rem;
    height: 80%;
  }
  .data-card-title {
    color: grey;
    font-size: 1rem;
    opacity: 60%;
  }
  .data-card-value {
    color: black;
    font-size: 2.8vw;
  }
  .data-card-report-link-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid #97979733;
    height: 20%;
    padding: 1rem;
  }
  .data-card-report-link {
    color: var(--orange-color);
    font-size: 0.8rem;
    text-decoration: none;
    font-weight: 500;
  }
`;
