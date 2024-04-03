import styled from "styled-components";


export const OrderPageContainer = styled.div`
/* border: 1px solid red; */

`
export const OrderPageMain = styled.div`
    /* border: 1px solid blue; */
    padding: 0 10vw;

    .order-page-Title{
        font-size: 2vw;
        font-weight: 500;
        margin-bottom: 2.5vh;
    }
  
`

export const OrderItemRowContiner = styled.div`
    /* border: 2px solid green; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: gainsboro;
`

export const ProductDetail = styled.div`
/* border: 1px solid yellow; */
    display: flex;

    .order-item-picture{
    width: 7vw;
    height: 10.2vh;
}
.order-item-details{
    padding-top: 3vh;
}
`

export const ProductTotal = styled.div`
    /* border: 1px solid green; */
    font-size: 1.5vw;
    font-weight: 600;
    padding-top: 7vh;
`

export const OrderTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: grey;
    margin-top: 2vh;
    margin-bottom: 2vh;
    height: 5vh;
    border-radius: 10px;
    padding: 1vh 1vw 0vh 1vw;


    .order-total-text{
        font-size: 1.5vw;
        font-weight: 600;
    }

    .order-total-amount{
        font-size: 1.5vw;
        font-weight: 600;
    }

`

export const PayNowButton = styled.div`
    background-color: orange;
    text-align: center;
    font-size: 1.2vw;
    font-weight: 600;
    margin-bottom: 2vh;
    height: 5vh;
    padding-top: 1vh;
    border-radius: 10px;
    &:hover{
        font-size: 1.3vw; 
        height: 5.1vh;
    }
`

export const CancelOrderButton = styled.div`
    background-color: red;
    text-align: center;
    font-size: 1.2vw;
    font-weight: 600;
    height: 5vh;
    padding-top: 1vh;
    border-radius: 10px;
    &:hover{
        font-size: 1.3vw; 
        height: 5.1vh;
    }
`