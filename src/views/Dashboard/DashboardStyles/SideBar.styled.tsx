import styled from "styled-components";

export const SideBarContainer = styled.div`
  /* margin-top: 10vh; */
  width: 20rem;
  height: 100vh;
  /* border: 1px solid green; */
`;

export const SideBarMainTitle = styled.h1`
  color: black;
  font-size: 2.3vw;
  margin-top: 0vh;
  margin-bottom: 4vh;
`;

export const SideBarMinorTitle = styled.h2`
  color: black;
  font-size: 1.5vw;
  font-weight: 600;
  margin-top: 0vh;
  margin-bottom: 3vh;
`;

export const SideBarCategoryTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1vh;
  /* border: 1px solid red; */

  .sidebar-category-filter-title {
    color: black;
    font-size: 1vw;
    font-weight: 600;
  }

  .sidebar-filter-arrow {
    margin-top: 1vh;
    margin-right: 1.5rem;
  }
`;

export const SideBarCategory = styled.div`
  margin-bottom: 0.5vh;
  form {
    display: flex;
    flex-direction: column;
    border: none;
    gap: 1rem;
  }
  form fieldset {
    display: flex;
    border: none;

  }
  .sidebar-filter-selection {
    border: 1px solid grey;
    /* background-color: pink; */
    accent-color: #e04f16;
  }

  .sidebar-filter-selection-label {
    font-size: 1vw;
    font-weight: 400;
    margin-left: 1rem;
    color: black;
  }

  .sidebar-filter-selection-show-more-continer {
    display: flex;
    color: #e04f16;
  }
  .sidebar-filter-selection-show-more-text {
    font-size: 0.8vw;
  }

  .sidebar-filter-selection-show-more-arrow {
    width: 0.5rem;
    height: 0.5vh;
    margin-top: 0.8vh;
    margin-left: 0.5rem;
  }
`;
