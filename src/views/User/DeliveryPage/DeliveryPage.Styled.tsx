import styled from "styled-components";
import formBackground from "../../../assets/form-background-image.png";

export const DeliveryPageWholeContainer = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-image: url(${formBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
`

export const DeliveryPageMainContainer = styled.div`
    /* border: 1px solid red; */
    padding: 1vh 24vw;
    

`

export const DeliveryPageFormContainer = styled.div`
    /* border: 1px solid blue; */
    box-shadow: 2px 8px 20px 4px rgba(0, 0, 0, 0.1);
    height: 82vh;
    width: 50vw;
    border-radius:10px;
    background-color: white;
    /* padding: 0vh 1vw; */
    padding: 2vh 4.8vw 4vh 4.8vw;

    .delivery-form-title{
        font-size: 1.5vw;
        font-weight: 700;
        margin-bottom: 1vh;
    }

`
export const DeliveryPageForm = styled.form`
    /* border: 1px solid green; */
    /* padding: 3vh 9.5vw 0vh 9.5vw; */
    /* height: 70vh; */
    /* width: 50vw; */
`
export const DeliveryFormField = styled.div`
    /* border: 1px solid pink; */
    margin-bottom: 2vh;

    .delivery-form-label{
        font-size: 1.05vw;
        font-weight: 550;
    }
    .delivery-form-input{
        height: 4.3vh;
        width: 40vw;
        margin-top: 1vh;
        border-radius: 7px;
        border: 0.1px solid gray;
        padding-left: 1vw;
        color: grey;
        font-size: 0.9vw;
        opacity: 50%;

        &:focus {
            outline: none; 
            border-color: var(--orange-color); 
            box-shadow: 0 0 0 2px var(--orange-color); 
            color: #000;
         }
    }
    
    .delivery-form-textarea{
        height: 17vh;
        width: 40vw;
        margin-top: 1vh;
        border-radius: 7px;
        border: 0.1px solid gray;
        padding-top: 1vh;
        padding-left: 1vw;
        color: grey;
        font-size: 0.9vw;
        opacity: 50%;

        &:focus {
            outline: none; 
            border-color: var(--orange-color); 
            box-shadow: 0 0 0 2px var(--orange-color); 
            color: #000;
         }
    }
`
export const DeliveryPageButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .delivery-form-cancel-button{
    color: var(--orange-color);
    background-color: white;
    border: 1px solid var(--orange-color);
    }

    .delivery-form-checkout-button{
    color: white;
    background-color: var(--orange-color);
    border: none;
    }
`

export const DeliveryPageButton = styled.div`
    border: 1px solid black;
    width: 10vw;
    height: 6.5vh;
    border-radius: 8px;
    font-size: 1.15vw;
    text-align: center;
    padding-top: 2vh;
    cursor: pointer;

    &:hover{
        font-size: 1.2vw;
        width: 10%.1vw;
        height: 6.6vh;
    }
`

export const RequiredLabel = styled.label`
 display: inline-block;
 margin-bottom: 0.5rem;
 color: #333; // Default text color

 &::after {
    content: "*";
    color: red;
    margin-left: 0.25rem;
 }
`;