import {
  PaymentPageWholeContainer,
  PaymentPageMainContainer,
  PaymentPageContentContainer,
  PaymentPageContent,
  PaymentPageButtonsContainer,
  PaymentPageButton,
} from "./PaymentPage.Styled";

<<<<<<< HEAD
import Header from "../../../components/Header/Header";
import MultipurposeModal from "../../../components/MultipurposeModal/MultipurposeModal";
import { useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
=======
import { PaymentPageWholeContainer, PaymentPageMainContainer, PaymentPageContentContainer, PaymentPageContent, PaymentPageButtonsContainer, PaymentPageButton } from "./PaymentPage.Styled"


import Header from "../../../components/Header/Header"
import MultipurposeModal from "../../../components/MultipurposeModal/MultipurposeModal"
import paystackLogo from "../../../assets/paystack_icon.png"
import { useState } from "react"
import axiosInstance from "../../../utils/axiosInstance"
>>>>>>> 47df2cd310eccacc41b2ed54d5719c62579126a5

import { Link, NavigateFunction, useNavigate} from "react-router-dom";

const PaymentPage = () => {
<<<<<<< HEAD
  const navigate: NavigateFunction = useNavigate();
=======
    const navigate:NavigateFunction = useNavigate();
    
    
>>>>>>> 47df2cd310eccacc41b2ed54d5719c62579126a5

  //HANDLING THE CONFIRM CANCEL MODAL
  const [confirmCancelModalVisibility, setConfirmCancelModalVisibility] =
    useState(false);
  const confirmCancelModalTitle = `CONFRIM ORDER CANCELLATION`;
  const confirmCancelModalmessage = `Please confirm you want to cancel your order`;
  const toggleConfirmCancelModal = () => {
    setConfirmCancelModalVisibility(true);
  };

  //HANDLING THE ORDER CANCELLED MODAL
  const [orderCancelledmodalVisibility, setOrderCancelledModalVisibility] =
    useState(false);
  const orderCancelledModalTitle = `ORDER CANCELLED`;
  const orderCancelledModalMessage = `Your order has been cancelled`;
  const orderCancelledmodalButtonAction = () => {
    navigate("/user/my-cart");
  };

  //HANDLING THE PROCEED TO Purchase MODAL
<<<<<<< HEAD
  const [purchaseModalVisibility, setPurchaseModalVisibility] = useState(false);
  const purchaseModalTitle = `PURCHASE COMPLETED`;
  const purchaseModalMessage = `Thank you for shopping with Traidr`;
  const purchaseModalButtonAction = () => {
    navigate("/user/order-summary");
  };
=======
  const [purchaseModalVisibility, setPurchaseModalVisibility] = useState(false)
  const purchaseModalTitle = `PURCHASE COMPLETED`
  const purchaseModalMessage = `Thank you for shopping with Traidr`
  const purchaseModalButtonAction = ()=>{navigate('/order/receipt')}
>>>>>>> 47df2cd310eccacc41b2ed54d5719c62579126a5
  // const togglePurchaseModal = ()=>{
  //   setPurchaseModalVisibility(!purchaseModalVisibility)
  // }

  const handleCheckout = async () => {
    try {
      const res = await axiosInstance.post(`/sale/complete-sale`);
      if (res) {
        setPurchaseModalVisibility(true);
      }
    } catch (error) {
      return error;
    }
  };

  const handleCancel = async () => {
    try {
      const res = await axiosInstance.post("/sale/cancel-delivey-and-sale");
      if (res) {
        setConfirmCancelModalVisibility(false);
        setOrderCancelledModalVisibility(true);
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <PaymentPageWholeContainer>
      {confirmCancelModalVisibility && (
        <MultipurposeModal
          title={confirmCancelModalTitle}
          message={confirmCancelModalmessage}
          onClickAction={handleCancel}
        />
      )}

      {orderCancelledmodalVisibility && (
        <MultipurposeModal
          title={orderCancelledModalTitle}
          message={orderCancelledModalMessage}
          onClickAction={orderCancelledmodalButtonAction}
        />
      )}

      {purchaseModalVisibility && (
        <MultipurposeModal
          title={purchaseModalTitle}
          message={purchaseModalMessage}
          onClickAction={purchaseModalButtonAction}
        />
      )}

      <Header />
      <PaymentPageMainContainer>
        <PaymentPageContentContainer>
          <PaymentPageContent>
            <p>Complete Payment through Paystack</p>
          </PaymentPageContent>

<<<<<<< HEAD
          <PaymentPageButtonsContainer>
            <PaymentPageButton
              className="payment-page-cancel-button"
              onClick={toggleConfirmCancelModal}
            >
              CANCEL
            </PaymentPageButton>

            <PaymentPageButton
              className="payment-page-checkout-button"
              onClick={handleCheckout}
            >
              PAY
            </PaymentPageButton>
          </PaymentPageButtonsContainer>
        </PaymentPageContentContainer>
      </PaymentPageMainContainer>
=======
        <Header/>
        <PaymentPageMainContainer>
            <PaymentPageContentContainer>
            <PaymentPageContent>
                        <p className="payment-page-title">Complete Payment Through Paystack</p>
                        <div>
                          <Link to="https://paystack.com/pay/traidr">
                            <img src={paystackLogo} className="paystack-link-image"/>
                          </Link>
                        </div>
                        <p className="payment-page-instructions">Click button to pay with paystack.</p>
                        
                    </PaymentPageContent>

                <PaymentPageButtonsContainer>
                    <PaymentPageButton className="payment-page-cancel-button" onClick={toggleConfirmCancelModal}>CANCEL</PaymentPageButton>

                  
                    <PaymentPageButton className="payment-page-checkout-button" onClick={handleCheckout}>PAY</PaymentPageButton>
                </PaymentPageButtonsContainer>
            </PaymentPageContentContainer>
        </PaymentPageMainContainer>
>>>>>>> 47df2cd310eccacc41b2ed54d5719c62579126a5
    </PaymentPageWholeContainer>
  );
};

export default PaymentPage;