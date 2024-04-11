import styled from "styled-components";

export const AdminPageContainer = styled.div`
  width: 100vw;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  oveflow-x: hidden !important;
`;

export const AdminPageMain = styled.div`
  background-color: #f9fafb;
  width: 80%;
  margin-left: 20%;
  oveflow-x: hidden !important;
`;
export const AdminPageTitle = styled.h2`
  background: none;
  color: black;
  margin-top: 2rem;
  font-size: 2.5vw;
  font-weight: 600;
`;

export const AdminPageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f9fafb;
  padding: 0 3rem;
  overflow-x: hidden;
  min-height: 100vh;
`;

export const AdminPageContentChartWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 2rem;
`;
export const AdminDashboardPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f9fafb;
  padding: 0 3rem;
  overflow-x: hidden;
  min-height: 100%;
`;
