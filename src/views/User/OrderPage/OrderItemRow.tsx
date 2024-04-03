import { OrderItemRowContiner, ProductDetail, ProductTotal} from './OrderPage.Styled'



//Interface imports
import { OrderProductDetail } from '../../../interfaces/orderInterfaces';


interface OrderItemProps{
    orderItem: OrderProductDetail;
}

const OrderItemRow = ({orderItem}: OrderItemProps) => {
  return (
    <OrderItemRowContiner >
        <ProductDetail>
          <img src={orderItem.productImage} className='order-item-picture'/>
          <div className='order-item-details'>
          <div>Pay to: {orderItem.sourceShop}</div>
          <div className="order-item-qty-and-title">{orderItem.productQuantity} x {orderItem.productTitle}</div>
          </div>
          
            </ProductDetail>  
          <ProductTotal>₦{orderItem.productTotal.toLocaleString()}</ProductTotal>

    </OrderItemRowContiner >
  )
}

export default OrderItemRow