import styled from "styled-components";


export const AddQuantityModalContainer = styled.div`
    box-shadow:  -5px 0px 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: 23vh; 
    align-items: center;
    padding-top: 1vh;
    position: absolute;
    z-index:100;
`

export const ModalCancelButton = styled.div`
    margin-left: 10vw;
    margin-bottom: 1.5vh;
    width: 1.5vw;
    height: 3vh;
    color: var(--orange-color);
    border: 1px solid var(--orange-color);
    border-radius: 3vw;
    text-align: center;
    cursor: pointer;
`

export const QuantityModalSection = styled.div`
    /* border: 1px solid green; */
    display: flex;
    flex-direction: row;
    #remove-button{
        padding-top: 0.5vh;
        margin-right: 1vw;
    }
    
    #pos-button{
        padding-top:0.5vh;
        margin-left: 1vw;
    }
`

export const QuantityCounterButton = styled.div`
    /* border: 2px solid; */
    border-radius: 10px;
    background-color: var(--orange-color);
    color: white;
    font-size: 1.5vw;
    height: 5vh;
    width: 3vw;
    text-align: center;
    cursor: pointer;
`

export const ModalInputField = styled.div`
    /* border: 1px solid purple; */
    height: 5vh;
    width: 3vw;

    input::-webkit-inner-spin-button, input::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin:0
    }
    .quantity-modal-input{
    height: 5vh;
    width: 3vw;
    border-radius: 10px;
    border: 0.5px solid grey;
    text-align: center;
    /* padding-left: 1vw; */
    /* margin-left: 1vw;
    margin-right: 1vw; */
    }


`

export const QuantityModalButton = styled.button`
    border: 1.5px solid var(--orange-color);
    color: var(--orange-color);
    background-color: white;
    border-radius: 10px;
    height: 4vh;
    width: 10vw;
    margin-top: 2vh;
    margin-left: 0.7vw;
    cursor: pointer;

    &:hover{
        background-color:var(--orange-color);
        color: white;
    }

`