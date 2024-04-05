//styled imports
import { OrderSummaryWholeContainer, OrderSummaryMain, OrderSummaryOverView  } from "./OrderSummary.Styled"

//component imports
import Header from "../../../components/Header/Header"

import { useState, useEffect } from "react"

const OrderSummary = () => {
  return (
    <OrderSummaryWholeContainer>
        <Header/>
        <OrderSummaryMain>

        <OrderSummaryOverView>
            <p>3 Items</p>
            <p>Placed on 5th November 2023</p>
            <p>Total</p>
        </OrderSummaryOverView> 
            
        </OrderSummaryMain>
    </OrderSummaryWholeContainer>
  )
}

export default OrderSummary