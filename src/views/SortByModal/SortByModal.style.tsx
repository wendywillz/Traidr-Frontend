import styled from "styled-components";

export const SortByModalContainer = styled.div`    
        /* border: 1px solid grey; */
        box-shadow: -5px 0px 15px 0px rgba(0, 0, 0, 0.1);
        border-radius: 1rem;
        background-color: white;
        padding: 0.5vh 0;
        /* padding-left: 2rem; */
        width: 8rem;
        position: absolute;
        top: 17.5vh;
        right: 7.5rem;

        .sort-by-filter{
            font-size: 1vw;
            margin: 1vh 0;
            color: black;
            text-align: center;
        }
        .sort-by-filter:hover{
            font-size: 1.01vw;
            color:  #E04F16;
            /* background-color: #E04F16;
            color:white; */

        }
`