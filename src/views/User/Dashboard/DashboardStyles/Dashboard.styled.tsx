import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  margin-top: 5vh;
  padding: 0 5rem;
`;

export const DashboardMain = styled.div`
  /* margin-top: 10vh; */
  margin-left: 2rem;
  width: 80%;
  /* border: 1px solid red; */
`;

export const DashBoardTitle = styled.h1`
  margin-top: 3vh;
  font-size: 2.1vw;
  font-weight: 700;
  /* margin-left: 30%; */
  margin-bottom: 1vh;
  /* border: 1px solid gold; */
  color: black;
`;

export const DasboardPageButtonContainer = styled.div`
/* border: 1px solid green; */
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 5vh;
margin-bottom: 5vh;
padding: 0vh 0vw;
height: 6vh;
/* margin-left: 20vw; */


.prev-button{
  &:hover{
    padding-right:1.5vw;
  }
}

.next-button{
  &:hover{
    padding-left: 1.5vw;
  }
}

.dashboard-current-page-text{
  padding-top: 1.3vh;
  font-size: 1.3vw;
  font-weight:500;
}

`

export const DashboardChangePageButton = styled.button`
background-color: white;
border: 1px solid var(--orange-color);
border-radius: 10px;
height: 5vh;
width: 8vw;




.dashboard-page-previous-button{
  /* border: 1px solid blue; */
  color:var(--orange-color);
  stroke-width: 1;
  &:hover{
    /* color: white; */
  }
}

.dashboard-page-next-button{
  /* border: 1px solid blue; */
  color: var(--orange-color);
  stroke-width: 1;
  &:hover{
    /* color: white; */
  }
}

`
