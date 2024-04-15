import styled from "styled-components";

const AdminDashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  width: 20%;
  z-index: 200;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 0 2rem 2rem 2rem;

  // .admin-side-bar-logo-wrapper {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  // }
  .admin-side-bar-content {
    margin-top: 6rem;
    display: flex;
    flex-direction: column;

  }

  .admin-side-bar-each-content {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;
    text-decoration: none;
    color: var(--normal-text-color);
    transition: all 0.3s;
  }
  .admin-side-bar-each-content:hover {
    background-color: var(--orange-color);
    color: #fff;
    padding: 0.8rem 1rem;
  }
  .active-link {
    background-color: var(--orange-color) !important;
    color: #fff !important;
    padding: 0.8rem 1rem !important;
  }

  .admin-side-bar-each-content a img {
  }
  .admin-side-bar-each-content a span {
    text-align: left;
  }
`;

export default AdminDashboardStyle;
