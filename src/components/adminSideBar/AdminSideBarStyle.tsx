import styled from "styled-components";

const AdminDashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  width: 20%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  .admin-side-bar-logo-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .admin-side-bar-content {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  .admin-side-bar-content a {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;
    text-decoration: none;
    color: var(--normal-text-color);
  }
  .admin-side-bar-each-content a img {
  }
  .admin-side-bar-each-content a span {
    text-align: left;
  }
`;

export default AdminDashboardStyle;