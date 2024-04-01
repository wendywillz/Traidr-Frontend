import styled from "styled-components";

export const AdminPageContainer = styled.div`
  width: 100vw;
  justify-content: space-between;
  display: flex;
`;

export const AdminPageMain = styled.div`
  border: 2px solid pink;
  background-color: #f9fafb;
  width: 80%;
  margin-left: 20%;
  /* height: 100vh; */
  /* display:flex; */
`;
export const AdminPageTitle = styled.h2`
  background: none;
  color: black;
  font-size: 2.5vw;
  font-weight: 600;
  margin-bottom: 3vh;
  margin-left: 2.5vw;
`;

export const AdminPageContent = styled.div`
  display: grid;
  grid-template-columns: 50% 50% !important;
  gap: 10px;
  background-color: #f9fafb;
  background-color: red;
  margin-left: 2.5vw;
`;
