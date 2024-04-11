import styled from "styled-components";
export const ProfileNavigationContainer = styled.div`
  margin-bottom: 3rem;
`;

export const ProfileNavigationList = styled.ul`
  display: flex;
  /* text-decoration: none; */
  justify-content: space-between;

  .profile-navigation-list-item {
    color: grey;
    /* text-decoration: none; */
    list-style-type: none;
  }

  .profile-section-underline {
    /* margin-top: 2vh; */
    border: 0.1px solid grey;
  }

  .active {
    color: #e04f16;
  }
  .active-line {
    border: 1px solid #e04f16;
    z-index: 10;
  }
`;
