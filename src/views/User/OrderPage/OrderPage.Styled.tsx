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
    background-color: white;
    /* border-left: 1px solid black;
    border-right: 1px solid black; */
    border-top: 1px solid black;
`

export const ProductDetail = styled.div`
/* border: 1px solid yellow; */
    display: flex;

    .order-item-picture{
    width: 7vw;
    height: 10.2vh;
}
.order-item-details{
    padding-top: 1vh;
    margin-left: 1vw;
}
.order-item-title{
    font-weight: 800;
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
    background-color: white;
    color: var(--price-green-color);
    margin-top: 1vh;
    margin-bottom: 2vh;
    height: 6vh;
    /* border-radius: 10px; */
    padding: 1vh 0vw 0vh 1vw;
    border-bottom: 2px solid var(--price-green-color);
    border-top: 2px solid var(--price-green-color);


    .order-total-text{
        font-size: 1.5vw;
        font-weight: 600;
        color: black;
    }

    .order-total-amount{
        font-size: 1.5vw;
        font-weight: 800;
        color: var(--price-green-color);
    }

`

export const PayNowButton = styled.div`
    background-color:var(--orange-color);
    color: white;
    text-align: center;
    font-size: 1.2vw;
    font-weight: 600;
<<<<<<< HEAD
    margin-bottom: 2vh;
    height: 5vh;
    cursor: pointer;
    padding-top: 1vh;
=======
    margin-top: 4vh;
    margin-bottom: 3vh;
    height: 7vh;
    padding-top: 2vh;
>>>>>>> 1a201e8740d6b483f22e9d5cc7f4e5b34a41b71c
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        font-size: 1.3vw; 
<<<<<<< HEAD
        height: 5.1vh;
        cursor: pointer;
=======
        height: 7.1vh;
>>>>>>> 1a201e8740d6b483f22e9d5cc7f4e5b34a41b71c
    }
`

export const CancelOrderButton = styled.div`
    background-color: #F2F2F2;;
    border: 2px solid gainsboro;
    color: black;
    text-align: center;
    font-size: 1.2vw;
    font-weight: 600;
<<<<<<< HEAD
    height: 5vh;
    padding-top: 1vh;
    cursor: pointer;
=======
    height: 7vh;
    padding-top: 2vh;
>>>>>>> 1a201e8740d6b483f22e9d5cc7f4e5b34a41b71c
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        font-size: 1.3vw; 
<<<<<<< HEAD
        height: 5.1vh;
        cursor: pointer;
=======
        height: 7.1vh;
>>>>>>> 1a201e8740d6b483f22e9d5cc7f4e5b34a41b71c
    }
`