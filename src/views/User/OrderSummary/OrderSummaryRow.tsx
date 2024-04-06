import { OrderSummaryRowContainer, OrderSummaryProductDescription } from "./OrderSummary.Styled"

import blender from "../../../assets/dashboard-assets/blender-pic.png"



const OrderSummaryRow = () => {
  return (
    <OrderSummaryRowContainer>
        <img src={blender} className="order-summary-product-image"/>
        <OrderSummaryProductDescription>
            <p className="order-summary-product-name">Red blender set</p>
            <p className="order-summary-product-quantity">Qty: 6</p>
            <p className="order-summary-product-price">₦500</p>
        </OrderSummaryProductDescription>
    </OrderSummaryRowContainer>
  )
}

export default OrderSummaryRow