import { OrderSummaryRowContainer, OrderSummaryProductDescription } from "./OrderSummary.Styled"


//Interface imports
import { OrderProductDetail } from '../../../interfaces/orderInterfaces';


interface OrderedProductProps{
  orderedProduct: OrderProductDetail;
}


const OrderSummaryRow = ({orderedProduct}:OrderedProductProps) => {
  return (
    <OrderSummaryRowContainer>
        <img src={orderedProduct.productImage} className="order-summary-product-image"/>
        <OrderSummaryProductDescription>
            <p className="order-summary-product-name">{orderedProduct.productTitle}</p>
            <p className="order-summary-product-quantity">Qty: {orderedProduct.productQuantity}</p>
            <p className="order-summary-product-price">Unit price: ₦{orderedProduct.productPrice.toLocaleString()}</p>
            <p className="order-summary-product-seller">Vendor: {orderedProduct.sourceShop}</p>
        </OrderSummaryProductDescription>
    </OrderSummaryRowContainer>
  )
}

export default OrderSummaryRow