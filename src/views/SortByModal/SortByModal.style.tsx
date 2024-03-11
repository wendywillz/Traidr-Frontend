import styled from "styled-components";

export const SortByModalContainer = styled.div`    
        border: 1px solid grey;
        border-radius: 1rem;
        background-color: white;
        padding: 0.5vh 0;
        /* padding-left: 2rem; */
        width: 10rem;
        position: absolute;
        top: 18vh;
        right: 12rem;

        .sort-by-filter{
            font-size: 1vw;
            margin: 1vh 0;
            color: black;
            text-align: center;
        }
        .sort-by-filter:hover{
            font-size: 1.2vw;
            background-color: #E04F16;
            color:white;

        }
`