
//Style imports
import { OrderPageContainer, OrderPageMain,OrderTotal, PayNowButton, CancelOrderButton } from './OrderPage.Styled'

//component imports
import OrderItemRow from './OrderItemRow'
import Header from '../../../components/Header/Header'

//Interface imports
import { OrderProductDetail } from '../../../interfaces/orderInterfaces'


//Packages and tools
import { useState } from 'react'
import { fetchOrderItems } from '../../../api/order'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'

//import axiosInstance from '../../../utils/axiosInstance'



const OrderPage = () => {

    const userId:string|null = useSelector((state: RootState)=> state.user.userId) 

const [orderItems, setOrderItems] = useState<OrderProductDetail[]>()

const [orderTotal, setOrderTotal]= useState<number|undefined>(0)

fetchOrderItems(userId).then((res) => {
    if (res) {
        setOrderItems(res);
      let total = orderItems?.reduce((acc, curr)=> acc + (curr.productPrice* curr.productQuantity), 0)
      setOrderTotal(total)
    }
  })


  return (
    <OrderPageContainer>
        <Header/>
        <OrderPageMain>
            <h2 className='order-page-Title'>Order Summary</h2>
        <div>
            {orderItems?.map((orderItem)=>{
                return(
                    <div>
                    <OrderItemRow orderItem={orderItem} key={orderItem.productId}/>
                    <hr/>
                    </div>

                )
            })}
        </div>
        
          

            <OrderTotal>
                <div className='order-total-text'>ORDER TOTAL</div>
                <div className='order-total-amount'>₦{orderTotal?.toLocaleString()}</div>
            </OrderTotal>
            <PayNowButton>PAY NOW</PayNowButton>
            <CancelOrderButton>CANCEL ORDER</CancelOrderButton>
        </OrderPageMain>
    </OrderPageContainer>
  )
}

export default OrderPage