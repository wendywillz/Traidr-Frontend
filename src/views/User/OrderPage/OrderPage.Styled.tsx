import styled from "styled-components";
import formBackground from "../../../assets/form-background-image.png";


export const OrderPageContainer = styled.div`

/* border: 1px solid red; */
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-image: url(${formBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
    padding: 10vh 20vw 0vh 20vw;
    overflow: scroll;

    .backButton-container{
        position:fixed;
        margin-top: -4vh;
        left: 0vw;

    }

    .order-page-loader{
        position: fixed;
        top:0vh;
        left:0vw;
    }

`
export const OrderPageMain = styled.div`
    border: 1px solid gainsboro;
    border-radius:10px;
    background-color: white;
    overflow: scroll;
    padding: 0vh 2vw 4vh 2vw;
    

    .order-page-traidr-logo-container{
        margin-left: 25vw;
    }

    .order-page-traidr-logo{
        width: 6vw;
    }

    .order-page-Title{
        font-size: 2.3vw;
        font-weight: 500;
        margin-bottom: 4vh;
        margin-left: 1.5vw;
        margin-top:-3vh;
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
    /* border-top: 1px solid black; */
    margin-bottom: 2vh;
    padding: 1vh 1.5vw 1vh 1vw;
    box-shadow:  0px 0px 10px 0px rgba(0, 0, 0, 0.1);
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
    margin-top: 4vh;
    margin-bottom: 2vh;
    height: 6vh;
    /* border-radius: 10px; */
    padding: 1.5vh 1.5vw 0vh 1.5vw;
    /* border-bottom: 2px solid var(--price-green-color);
    border-top: 2px solid var(--price-green-color); */


    .order-total-text{
        font-size: 1.5vw;
        font-weight: 700;
        color: black;
    }

    .order-total-amount{
        font-size: 1.6vw;
        font-weight: 900;
        color: var(--price-green-color);
    }

`

export const PayNowButton = styled.div`
    background-color:var(--orange-color);
    color: white;
    text-align: center;
    font-size: 1.2vw;
    font-weight: 600;
    margin-bottom: 2vh;
    height: 5vh;
    cursor: pointer;
    padding-top: 1vh;
    margin-top: 4vh;
    margin-bottom: 3vh;
    height: 7vh;
    padding-top: 2vh;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        font-size: 1.3vw; 
        height: 5.1vh;
        cursor: pointer;
        height: 7.1vh;
    }
`

export const CancelOrderButton = styled.div`
    background-color: #F2F2F2;;
    border: 2px solid gainsboro;
    color: black;
    text-align: center;
    font-size: 1.2vw;
    font-weight: 600;
    height: 5vh;
    padding-top: 1vh;
    cursor: pointer;
    height: 7vh;
    padding-top: 2vh;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        font-size: 1.3vw; 
        height: 5.1vh;
        cursor: pointer;
        height: 7.1vh;
    }
`