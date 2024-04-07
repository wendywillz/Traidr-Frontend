//styled imports
import { OrderSummaryWholeContainer, OrderSummaryMainContainer, OrderSummaryMain, OrderSummaryOverView, OrderSummaryPaymentAndDeliverySection, OrderSummaryInformationCard, OrderSummaryNavigateButton  } from "./OrderSummary.Styled"

//component imports
import OrderSummaryRow from "./OrderSummaryRow"
import Header from "../../../components/Header/Header"

import { OrderProductDetail } from "../../../interfaces/orderInterfaces"
import { SaleSummary } from "../../../interfaces/saleInterfaces"

//package and tool imports
import { useState, useEffect } from "react"
import { fetchSaleSummary } from "../../../api/sale"
import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import { Link } from "react-router-dom"

const OrderSummary = () => {
  const userId:string|null = useSelector((state: RootState)=> state.user.userId) 


  const [saleSummary, setSaleSummary] =useState<SaleSummary>()
  const [orderItems, setOrderItems] = useState<OrderProductDetail[]>()

  const [totalQuantity, setTotalQuantity]= useState<number|undefined>(0)

useEffect(()=>{
  fetchSaleSummary (userId).then((res:SaleSummary) => {
        if (res) {
          setSaleSummary(res)
            setOrderItems(res.orderedProducts)
          let totalQty = res?.orderedProducts.reduce((acc, curr)=> acc + (curr.productQuantity), 0)
          setTotalQuantity(totalQty)
        //   console.log(`The total is`, total);
        }else{
            
        }
      })
},[])




  return (
    <OrderSummaryWholeContainer>
        <Header/>
        <OrderSummaryMainContainer>
          <OrderSummaryMain>
              <h2 className="order-summary-page-title">ORDER SUMMARY</h2>
          <OrderSummaryOverView>
              <p className="order-overview-title">Order Overview</p>
              <p className="order-overview-qty">{totalQuantity} Items</p>
              <p className="order-overview-date">Placed on {saleSummary?.saleDate}</p>
              <p className="order-overview-total">Total: ₦{saleSummary?.saleTotal.toLocaleString()}</p>
          </OrderSummaryOverView>
          <div className="order-items-list-title">PURCHASED ITEMS</div>
          <div className="order-items">
            {saleSummary?.orderedProducts.map((orderedProduct)=>{
              return(<OrderSummaryRow orderedProduct={orderedProduct} key={orderedProduct.productId}/>)
            })}
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
                <p className="order-summary-subsection-text">Items Total: ₦{saleSummary?.saleTotal.toLocaleString()} </p>
                <p className="order-summary-subsection-text">Delivery fees: ₦0 </p>
                <p className="order-summary-subsection-text">Total:₦ {saleSummary?.saleTotal.toLocaleString()} </p>
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
                <p className="order-summary-subsection-text">{saleSummary?.recipientName}</p>
                <p className="order-summary-subsection-text">0{saleSummary?.recipientPhoneNumber}</p>
                <p className="order-summary-subsection-text">{saleSummary?.deliveryAddress}</p>
              </div>
              <div className="order-summary-info-subsection">
                <p className="order-summary-subsection-title">Delivery Instructions</p>
                <p className="order-summary-subsection-text">{saleSummary?.deliveryInstructions}</p>
              </div>
            </OrderSummaryInformationCard>
          
          </OrderSummaryPaymentAndDeliverySection>
          <OrderSummaryNavigateButton><Link to="/dashboard" className="order-summary-link">Back to my dashboard</Link></OrderSummaryNavigateButton>
          
          </OrderSummaryMain>
        </OrderSummaryMainContainer>
    </OrderSummaryWholeContainer>
  )
}

export default OrderSummary