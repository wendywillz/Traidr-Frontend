import styled from "styled-components";

export const TenantsDBContainer = styled.div`
/* border: 1px solid blue;   */
`

export const TenantsDBTable = styled.table`
  /* border: 1px solid green; */
  border-collapse:collapse;
  width: 73vw;
`

export const TenantsDBHeaderRow = styled.tr`
  /* border: 1px solid orange; */
  height: 6vh;
  font-size: 1.2vw;
  font-weight:600;

  #header-row-id{
    width:20vw;
  }
`
export const TenantsDBHeaderCell = styled.th`
  /* color: gold; */
  text-align:left;
`

export const TenantsDBDataRow = styled.tr`
/* border: 1px solid yellow; */
height: 6vh;
font-size: 1vw;
  font-weight:400;
`

export const TenantsDBDataCell = styled.td`
  /* color: purple; */
`