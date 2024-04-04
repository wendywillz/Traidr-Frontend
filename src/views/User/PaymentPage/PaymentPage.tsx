
import { PaymentPageWholeContainer, PaymentPageMainContainer, PaymentPageContentContainer, PaymentPageContent, PaymentPageButtonsContainer, PaymentPageButton } from "./PaymentPage.Styled"


import Header from "../../../components/Header/Header"
import MultipurposeModal from "../../../components/MultipurposeModal/MultipurposeModal"

const PaymentPage = () => {




  return (
    <PaymentPageWholeContainer>
        <Header/>
        <PaymentPageMainContainer>
            <PaymentPageContentContainer>
            <PaymentPageContent>
                        <p>Complete Payment through Paystack</p>
                    </PaymentPageContent>

                <PaymentPageButtonsContainer>
                    <PaymentPageButton className="payment-page-cancel-button">CANCEL</PaymentPageButton>

                    <PaymentPageButton className="payment-page-checkout-button">PAY</PaymentPageButton>
                </PaymentPageButtonsContainer>
            </PaymentPageContentContainer>
        </PaymentPageMainContainer>
    </PaymentPageWholeContainer>
  )
}

export default PaymentPage