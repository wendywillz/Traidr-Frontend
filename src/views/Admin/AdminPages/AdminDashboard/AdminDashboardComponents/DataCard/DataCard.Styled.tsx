import styled from "styled-components";

export const DataCardContainer = styled.div`
    border: 1px solid green;
    border-radius: 4px;
    width: 17vw;
    height: 15vh;
    background-color: white;
    margin-right: 2vw;

   
    .data-card-title{
        color: grey;
        font-size: 1vw;
        opacity:60%;
        margin-bottom: 0.5vh;
    }
    .data-card-value{
        color: black;
        font-size: 2.8vw;
        font-weight: 700;
        margin-bottom: 2vh;
    }
    .data-card-report-link-container{
        text-align: right;
    }
    .data-card-report-link{
        font-size: 1vw;
        color: #E04F16;
        text-decoration: none;
        margin-right:0.5vw;
    }
`