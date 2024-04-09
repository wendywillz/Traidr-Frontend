import styled from "styled-components";

export const TenantsDBContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  justify-content: center;

  .table-container {
    margin: 20px;
  }

  table {
    width: 70%;
    border-collapse: collapse;
    height: 90vh;
  }

  th,
  td {
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  td input {
    width: 100%;
    border: none;
    padding: 5px;
    outline: none;
  }
`;
