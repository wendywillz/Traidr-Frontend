//styled imports
import { OrderSummaryWholeContainer, OrderSummaryMainContainer, OrderSummaryMain, OrderSummaryOverView, OrderSummaryPaymentAndDeliverySection, OrderSummaryInformationCard } from "./OrderSummary.Styled"

//component imports
import OrderSummaryRow from "./OrderSummaryRow"
import Header from "../../../components/Header/Header"

import { useState, useEffect } from "react"

const OrderSummary = () => {
  return (
    <OrderSummaryWholeContainer>
        <Header/>
        <OrderSummaryMainContainer>
          <OrderSummaryMain>
              <h2 className="order-summary-page-title">ORDER SUMMARY</h2>
          <OrderSummaryOverView>
              <p className="order-overview-title">Order Overview</p>
              <p className="order-overview-qty">3 Items</p>
              <p className="order-overview-date">Placed on 5th November 2023</p>
              <p className="order-overview-total">Total: ₦8,000</p>
          </OrderSummaryOverView>
          <div className="order-items-list-title">PURCHASED ITEMS</div>
          <div className="order-items">
          <OrderSummaryRow/>
          <OrderSummaryRow/>
          <OrderSummaryRow/>
          </div>
          <OrderSummaryPaymentAndDeliverySection>
            <OrderSummaryInformationCard>
              <div className="order-summary-info-title">PAYMENT INFORMATION</div>
              <div className="order-summary-info-subsection">
                <p className="order-summary-subsection-title">Payment Method</p>
                <p className="order-summary-subsection-text">Paid with bank transfer via Paystck</p>
              </div>
              <div className="order-summary-info-subsection">
                <p className="order-summary-subsection-title">Payment Details</p>
                <p className="order-summary-subsection-text">Items Total: ₦8,000 </p>
                <p className="order-summary-subsection-text">Delivery fees: ₦0 </p>
                <p className="order-summary-subsection-text">Total: ₦8,000 </p>
              </div>
            </OrderSummaryInformationCard>
            <OrderSummaryInformationCard id="delivery-info">
            <div className="order-summary-info-title">DELIVERY INFORMATION</div>
              <div className="order-summary-info-subsection">
                <p className="order-summary-subsection-title">Delivery Method</p>
                <p className="order-summary-subsection-text">Door Delivery</p>
              </div>
              <div className="order-summary-info-subsection">
                <p className="order-summary-subsection-title">Shipping Address</p>
                <p className="order-summary-subsection-text">Elephant Girl</p>
                <p className="order-summary-subsection-text">08033041194</p>
                <p className="order-summary-subsection-text">10, Orchid Road Lekki Lagos</p>
              </div>
              <div className="order-summary-info-subsection">
                <p className="order-summary-subsection-title">Delivery Instructions</p>
                <p className="order-summary-subsection-text">Leave the package by the blue door</p>
              </div>
            </OrderSummaryInformationCard>
          
          </OrderSummaryPaymentAndDeliverySection>
          
          </OrderSummaryMain>
        </OrderSummaryMainContainer>
    </OrderSummaryWholeContainer>
  )
}

export default OrderSummary