import styled from "styled-components";

//This is for the main part of the page (i.e excludes the header)
export const StockShopMain = styled.div`
    padding: 1vh 8rem;
`

export const StockShopTimeline = styled.div`
    /* border: 1px solid pink; */
    width: 58rem;
    margin-left: 5rem;
    margin-bottom: 10vh;
    margin-top: 5vh; 

    .stock-shop-page-timeline-sections{
        display: flex;
        justify-content: space-between;
        font-size: 1vw;
        font-weight:300;
    }

    .stock-shop-page-timeline-complete-section{
        color: #E04f16;
        font-size: 1vw;
    }

    .stock-shop-page-timeline-incomplete-section{
        color: grey;
        opacity: 40%;
        font-size: 1vw;
    }
`

export const PageDescriptionStyle = styled.div`
        /* border: 1px solid blue; */
        margin-bottom: 3vh;
    .stock-shop-page-instruction-title{
        font-size:1.5vw;
        margin-bottom: 2vh;
        /* border: 1px solid green; */
       
    }

    .stock-shop-page-instruction-description{
        font-size:0.98vw;
        font-weight: 300;

        color: grey;
        /* border: 1px solid blue; */
    }
    `

export const StockShopMainForm= styled.form`
    /* border: 1px solid green; */
    background-color: white;
    width: 70rem;
`

export const BaseButtons = styled.div`
        display: flex;
        justify-content: space-between;
        /* border: 1px solid purple; */


        .stock-shop-page-cancel-button{
            width: 7rem;
            height: 5vh;
            background-color: white;
            color: #E04F16;
            border: 1px solid #E04F16;
            border-radius: 0.3rem;
            font-size: 1vw;
            font-weight: 500;

        }

        .stock-shop-page-save-and-continue-button{
            width: 10rem;
            height: 5vh;
            background-color:  #E04F16;
            color:white;
            border-radius: 0.3rem;
            font-size: 0.9vw;
            font-weight: 500;
            border: none;
        }
`