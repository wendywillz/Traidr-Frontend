import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin-left: 30%; */
    margin-top: 0vh;
    /* border: 1px solid blue; */
`

export const SearchField = styled.input`
    
    border: 1px solid grey;
    height: 4vh;
    width: 80%;
    border-radius: 5px;
    padding: 0vh 1rem;
`
 
export const SortButton = styled.button`
    border: 1px solid gray;;
    background-color: white;
    font-size: 1vw;
    height: 4.5vh;
    width: 7rem;
    border-radius: 5px;
    text-align: center;
    padding:0;
    margin-left: 2rem;
    margin-right: 3rem;
    /* margin-top:0vh; */
    margin-bottom: 0vh;
`