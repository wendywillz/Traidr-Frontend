import styled from "styled-components";

export const OrderHistoriesWholeContainer = styled.div`
    /* border: 1px solid red; */
`

export const OrderHistoriesMainContainer = styled.div`
    /* border: 1px solid pink; */
    padding-left: 10vw;
`

export const OrderHistoriesMain = styled.div`
    /* border: 1px solid blue; */
    border-radius: 10px;
    box-shadow: 2px 8px 20px 4px rgba(0, 0, 0, 0.1);
    padding: 1vh 2vw;
    width: 80vw;

    .order-history-list-page-title{
        font-size: 2vw;
        font-weight: 600;
        margin-bottom: 2vh;
    }
`

export const OrderHistoriesTableContainer = styled.div`
    /* border: 1px solid green; */
    margin-bottom: 1vh;
`

export const OrderHistoriesTable = styled.table`
    border-collapse:collapse;
    border: 1px solid black;
`

export const OrderHistoriesTableHeadingRow = styled.tr`
    /* color: orange; */
    font-size: 1.3vw;
`

export const OrderHistoriesTableRow = styled.tr`
    /* color: violet; */
    font-size: 1vw;
    font-weight: 400;

    .order-history-row{
        width: 20vw;
        text-align: center;
        border: 1px solid black;
    }

    #order-history-num-row{
        width: 5vw;
    }

    #order-history-total-row{
        width: 20vw;
    }
    #order-history-details-row{
        width: 12vw;
        
    }
    #order-history-details-link{
        color: var(--orange-color);
        cursor:pointer;
        /* text-decoration:none; */
    }
`