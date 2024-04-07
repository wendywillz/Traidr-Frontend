import styled from "styled-components";
import formBackground from "../../../assets/form-background-image.png";


export const PaymentPageWholeContainer = styled.div`
    /* border: 1px solid red; */
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-image: url(${formBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
`

export const PaymentPageMainContainer = styled.div`
    /* border: 1px solid red; */
    padding: 1vh 24vw;
    

`

export const PaymentPageContentContainer = styled.div`
    /* border: 1px solid blue; */
    box-shadow: 2px 8px 20px 4px rgba(0, 0, 0, 0.1);
    height: 82vh;
    width: 50vw;
    border-radius:10px;
    background-color: white;
    /* padding: 0vh 1vw; */
    padding: 2vh 4.8vw 4vh 4.8vw;

    .payment-content-title{
        font-size: 1.5vw;
        font-weight: 700;
        margin-bottom: 1vh;
    }

`
export const PaymentPageContent = styled.div`
    /* border: 1px solid green;  */
    padding: 3vh 0vw 0vh 2vw; 
    height: 70vh; 
    width: 43vw;

    .payment-page-title{
        font-size: 2vw;
        font-weight: 700;
    }
    .paystack-link-image{
        cursor: pointer;
        margin-top: 15vh;
        margin-left: 7vw;
        /* margin-bottom: 2vh; */
        width: 20vw;
        box-shadow: 2px 8px 20px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }
    .paystack-link-image:hover{
        width: 22vw;
    }
    .payment-page-instructions{
        /* margin-top: 10vh; */
        margin-bottom: 2vh;
        margin-left: 10vw;
        font-size: 1vw;
        font-weight: 400;
        color: grey;
        opacity: 50%;
    }
`


export const PaymentPageButtonsContainer = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .payment-page-cancel-button{
    color: var(--orange-color);
    background-color: white;
    border: 1px solid var(--orange-color);
    }

    .payment-page-checkout-button{
    color: white;
    background-color: var(--orange-color);
    border: none;
    }
`

export const PaymentPageButton = styled.div`
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
