import styled from "styled-components";

import formBackground from "../../../assets/form-background-image.png";

export const OrderSummaryWholeContainer = styled.div`
    border: 1px solid red;  
    /* background-image: url(${formBackground}); */
  /* background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
`
   
export const OrderSummaryMainContainer = styled.div`
    /* border: 1px solid red; */
    padding: 0vh 20vw 3vh 20vw; 
`

export const OrderSummaryMain = styled.div`
    /* border: 1px solid blue; */
    box-shadow:  -5px 0px 10px 4px rgba(0, 0, 0, 0.1);
    padding: 2vh 2vw;
    border-radius: 10px;
    background-color: white;
    

    .order-summary-page-title{
        font-size: 2vw;
        font-weight:700;
        margin-bottom: 2vh;
    }

    .order-items-list-title{
        margin-bottom: 0.5vh;
        margin-top: 2vh;
        font-size: 1.3vw;
        font-weight:700;
    }

    .order-items{
        border-top: 1px solid grey;
        border-left: 1px solid grey;
        border-right: 1px solid grey;

    }
    
`

export const OrderSummaryOverView = styled.div`
    border:1px solid grey;

    .order-overview-title{
        font-size: 1.3vw;
        font-weight:700;
    }

    .order-overview-qty{
        font-size: 1vw;
        font-weight:400;
    }

    .order-overview-date{
        font-size: 1vw;
        font-weight:400;
    }

    .order-overview-total{
        font-size: 1vw;
        font-weight:400;
    }
`

export const OrderSummaryPaymentAndDeliverySection = styled.div`
    /* border: 1px solid yellow; */
    display: flex;
    flex-direction: row;
    margin-top: 4vh;
    justify-content:space-between;
    /* padding: 0vh 3vw; */

    /* #delivery-info{
        margin-left: 1.5vw;
    } */

    
`

export const OrderSummaryInformationCard = styled.div`
    border: 1px solid grey;
    height: 40vh;
    

    .order-summary-info-title{
        border-bottom: 1px solid black;
        font-size: 1.3vw;
        font-weight: 600;
        padding-left: 1vw;
    }
    .order-summary-info-subsection{
        margin-top: 1vh;
        margin-right: 1vw;
        margin-bottom: 2vh;
        padding-left: 1vw;
    }

    .order-summary-subsection-title{
        font-size: 1.1vw;
        font-weight: 600;
    }
    .order-summary-subsection-text{
        font-size: 1vw;
        // font-weight: 600;
    }
`

export const OrderSummaryNavigateButton = styled.div`
    border: none;
    color: white;
    background-color: var(--orange-color);
    width: 30vw;
    height: 6.5vh;
    border-radius: 8px;
    font-size: 1.15vw;
    text-align: center;
    padding-top: 2vh;
    cursor: pointer;
    text-decoration: none;
    margin: 2.5vh 0vw 1vh 15vw;
    /* visibility: hidden; */

    &:hover{
        font-size: 1.2vw;
        width: 10%.1vw;
        height: 6.6vh;
    } 
   
    .order-summary-link{
        text-decoration: none;
        color: white;
    }
     
`

///////////////////////////////////////////////////////
//STYLING FOR ODER SUMMARY ROW
export const OrderSummaryRowContainer = styled.div `
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */

    .order-summary-product-image{
        width: 7vw;
        height: 10vh;
    }
`

export const OrderSummaryProductDescription = styled.div `
    margin-left: 0.5vw;
    /* border: 1px solid yellow; */

    .order-summary-product-name{
        font-size: 1vw;
        font-weight:400;
    }

    .order-summary-product-quantity{
        font-size: 1vw;
        font-weight:400;
    }

    .order-summary-product-price{
        font-size: 1vw;
        font-weight:400;
    }
    .order-summary-product-seller{
        font-size: 1vw;
        font-weight:400; 
    }
`

export const DownloadButtonsContainer = styled.div`
 display: flex;
 justify-content: flex-end;
 gap: 10px; // Space between the buttons
 margin-bottom: 20px; // Space below the buttons

 button {
    background-color: var(--orange-color);
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
 }
 button:hover {
    background-color: var(--orange-color);
    transition: 0.3s;
    transform: scale(1.05);
 }
`;