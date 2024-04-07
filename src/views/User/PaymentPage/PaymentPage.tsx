
import { PaymentPageWholeContainer, PaymentPageMainContainer, PaymentPageContentContainer, PaymentPageContent, PaymentPageButtonsContainer, PaymentPageButton } from "./PaymentPage.Styled"


import Header from "../../../components/Header/Header"
import MultipurposeModal from "../../../components/MultipurposeModal/MultipurposeModal"
import { useState } from "react"
import axiosInstance from "../../../utils/axiosInstance"
import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import { NavigateFunction, useNavigate } from "react-router-dom";

const PaymentPage = () => {
    const navigate:NavigateFunction = useNavigate();
    const userId:string|null = useSelector((state: RootState)=> state.user.userId)

  //HANDLING THE PROCEED TO Purchase MODAL
  const [purchaseModalVisibility, setPurchaseModalVisibility] = useState(false)
  const purchaseModalTitle = `PURCHASE COMPLETED`
  const purchaseModalMessage = `Thank you for shopping with Traidr`
  const purchaseModalButtonAction = ()=>{navigate('/user/order-summary')}
  const togglePurchaseModal = ()=>{
    setPurchaseModalVisibility(!purchaseModalVisibility)
  }


  return (
    <PaymentPageWholeContainer>
        {purchaseModalVisibility && <MultipurposeModal title={purchaseModalTitle} message={purchaseModalMessage} onClickAction={purchaseModalButtonAction}/>}


        <Header/>
        <PaymentPageMainContainer>
            <PaymentPageContentContainer>
            <PaymentPageContent>
                        <p>Complete Payment through Paystack</p>
                    </PaymentPageContent>

                <PaymentPageButtonsContainer>
                    <PaymentPageButton className="payment-page-cancel-button">CANCEL</PaymentPageButton>

                    <PaymentPageButton className="payment-page-checkout-button" onClick={togglePurchaseModal}>PAY</PaymentPageButton>
                </PaymentPageButtonsContainer>
            </PaymentPageContentContainer>
        </PaymentPageMainContainer>
    </PaymentPageWholeContainer>
  )
}

export default PaymentPage