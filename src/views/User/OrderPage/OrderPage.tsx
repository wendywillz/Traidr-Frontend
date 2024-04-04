
//Style imports
import { OrderPageContainer, OrderPageMain,OrderTotal, PayNowButton, CancelOrderButton } from './OrderPage.Styled'

//component imports
import OrderItemRow from './OrderItemRow'
import Header from '../../../components/Header/Header'
import MultipurposeModal from '../../../components/MultipurposeModal/MultipurposeModal'

//Interface imports
import { OrderProductDetail } from '../../../interfaces/orderInterfaces'


//Packages and tools
import { useState, useEffect } from 'react'
import { fetchOrderItems } from '../../../api/order'
import axiosInstance from '../../../utils/axiosInstance'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'
import { NavigateFunction, useNavigate } from 'react-router-dom'

//import axiosInstance from '../../../utils/axiosInstance'



const OrderPage = () => {
const navigate:NavigateFunction = useNavigate();

const userId:string|null = useSelector((state: RootState)=> state.user.userId) 

//HANDLING THE MODAL
const [confirmationModalVisibility, setConfirmationModalVisibility]= useState(false)
const confrimationModalTitle = `CONFRIM ORDER CANCELLATION`
const confrimationModalmessage = `Please confirm you want to cancel your order`
const toggleConfirmationModal = ()=>{

    setConfirmationModalVisibility(true)

}


const [orderCancelledmodalVisibility, setOrderCancelledModalVisibility]= useState(false)
const orderCancelledModalTitle = `ORDER CANCELLED`
const orderCancelledModalMessage =`Your order has been cancelled`
const orderCancelledmodalButtonAction = ()=>{
  navigate('/user/my-cart')
}




const [orderItems, setOrderItems] = useState<OrderProductDetail[]>()

const [orderTotal, setOrderTotal]= useState<number|undefined>(0)

useEffect(()=>{
    fetchOrderItems(userId).then((res) => {
        if (res) {
            setOrderItems(res)
          let total = orderItems?.reduce((acc, curr)=> acc + (curr.productPrice* curr.productQuantity), 0)
          setOrderTotal(total)
          console.log(`The total is`, total);
        }else{
            navigate('/user/my-cart') 
        }
      })
},[])


const cancelOrder = async ()=>{
    const info = {
        currentUserId: userId
      } 
try {
     const res = await axiosInstance.post('/order/cancel-order', info)
     if(res){
        setConfirmationModalVisibility(false)
        setOrderCancelledModalVisibility(true)
        console.log(`ORDER CANCELLED`);
     }
    
} catch (error) {
    console.log(`Error canceling order. Reason:`, error);
}
}








  return (
    <OrderPageContainer>
        {confirmationModalVisibility && <MultipurposeModal title={confrimationModalTitle} message={confrimationModalmessage} onClickAction={cancelOrder}/>}
        {orderCancelledmodalVisibility && <MultipurposeModal title={orderCancelledModalTitle} message={orderCancelledModalMessage} onClickAction={orderCancelledmodalButtonAction}/>}
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
            <CancelOrderButton onClick={toggleConfirmationModal}>CANCEL ORDER</CancelOrderButton>
        </OrderPageMain>
    </OrderPageContainer>
  )
}

export default OrderPage