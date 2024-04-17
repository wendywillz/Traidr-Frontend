//style imports
import {
  DeliveryPageWholeContainer,
  DeliveryPageMainContainer,
  DeliveryPageFormContainer,
  DeliveryPageForm,
  DeliveryFormField,
  DeliveryPageButtonsContainer,
  DeliveryPageButton,
  RequiredLabel,
} from "./DeliveryPage.Styled";

//component imports

import MultipurposeModal from "../../../components/MultipurposeModal/MultipurposeModal";


//Interface imports
import DeliveryDetailsData from "../../../interfaces/deliveryInterfaces";

//package and tools imports
import { useState, ChangeEvent } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { NavigateFunction, useNavigate } from "react-router-dom";


const DeliveryPage = () => {
  const navigate: NavigateFunction = useNavigate();

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

  //HANDLING THE PROCEED TO PAYMENT MODAL
  const [proceedModalVisibility, setProceedModalVisibility] = useState(false);
  const proceedModalTitle = `CONFIRM ORDER PAYMENT`;
  const proceedModalMessage = `Please confirm you want to continue to pay`;
  const toggleProceedModal = ()=>{
    setProceedModalVisibility(!proceedModalVisibility)
  }
  // const proceedModalButtonAction = () => {
  //   // window.location.href = "https://paystack.com/pay/traidr";
  //   //navigate("/order/payment");
  //   console.log(`Payment`);
  // };

//HANDLING THE PAYSTACK MODAL


  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetailsData>({
    recipientName: "",
    recipientPhoneNumber: 0,
    deliveryAddress: "",
    deliveryInstructions: "",
  });
 

  const handleChange = (
    e: ChangeEvent<HTMLFormElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDeliveryDetails({ ...deliveryDetails, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    try {
      const res = await axiosInstance.post(
        `/delivery/create-delivery`,
        deliveryDetails
      );
      if (res) {
        window.location.href = "https://paystack.com/pay/traidr";
      }
    } catch (error) {
      return error;
    }
  };

  const handleCancel = async () => {
    try {
      const res = await axiosInstance.post("/sale/cancel-sale");
      if (res) {
        setConfirmCancelModalVisibility(false);
        setOrderCancelledModalVisibility(true);
      }
    } catch (error) {
      return error;
    }
  };

  const [recipientNameError, setRecipientNameError] = useState(false);
  const [recipientPhoneNumberError, setRecipientPhoneNumberError] =
    useState(false);
  const [deliveryAddressError, setDeliveryAddressError] = useState(false);

  const handlerChange = (
    e: ChangeEvent<HTMLFormElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDeliveryDetails({ ...deliveryDetails, [e.target.name]: e.target.value });
    // Reset error states
    setRecipientNameError(false);
    setRecipientPhoneNumberError(false);
    setDeliveryAddressError(false);
  };


  return (
    <DeliveryPageWholeContainer>
      {confirmCancelModalVisibility && (
        <MultipurposeModal
          title={confirmCancelModalTitle}
          message={confirmCancelModalmessage}
          onClickAction={handleCancel}
          cancelButton={true}
        />
      )}

      {orderCancelledmodalVisibility && (
        <MultipurposeModal
          title={orderCancelledModalTitle}
          message={orderCancelledModalMessage}
          onClickAction={orderCancelledmodalButtonAction}
        />
      )}

      {proceedModalVisibility && (
        <MultipurposeModal
          title={proceedModalTitle}
          message={proceedModalMessage}
          onClickAction={handleCheckout}
          cancelButton={true}
        />
       
      )}


      <DeliveryPageMainContainer>
        <DeliveryPageFormContainer>
          <p className="delivery-form-title">ORDER DELIVERY DETAILS</p>
          <DeliveryPageForm>
            <DeliveryFormField>
              <RequiredLabel htmlFor="recipientNameInput">
                RECIPIENT FULL NAME
              </RequiredLabel>
              <br />
              <input
                className="delivery-form-input"
                type="text"
                id="recipientNameInput"
                name="recipientName"
                placeholder="Jane Doe"
                value={deliveryDetails.recipientName}
                onChange={handlerChange}
              />
              {recipientNameError && (
                <p className="error-message">Please fill in this field.</p>
              )}
            </DeliveryFormField>
            <DeliveryFormField>
              <RequiredLabel htmlFor="recipientPhoneNumberInput">
                RECIPIENT PHONE NUMBER
              </RequiredLabel>
              <br />
              <input
                className="delivery-form-input"
                type="tel"
                id="recipientPhoneNumberInput"
                name="recipientPhoneNumber"
                placeholder="Enter phone number"
                value={deliveryDetails.recipientPhoneNumber}
                onChange={handlerChange}
              />
              {recipientPhoneNumberError && (
                <p className="error-message">Please fill in this field.</p>
              )}
            </DeliveryFormField>

            <DeliveryFormField>
              <RequiredLabel htmlFor="deliveryAddressInput">
                DELIVERY ADDRESS
              </RequiredLabel>
              <br />
              <textarea
                className="delivery-form-textarea"
                id="deliveryAddressInput"
                name="deliveryAddress"
                placeholder="32, Rasaq Eletu Street, Osapa London, Lagos"
                value={deliveryDetails.deliveryAddress}
                onChange={handlerChange}
              ></textarea>
              {deliveryAddressError && (
                <p className="error-message">Please fill in this field.</p>
              )}
            </DeliveryFormField>
            <DeliveryFormField>
              <label
                htmlFor="deliveryInstructionsInput"
                className="delivery-form-label"
              >
                DELIVERY INSTRUCTIONS (Optional)
              </label>
              <br />
              <textarea
                className="delivery-form-textarea"
                id="deliveryInstructionsInput"
                name="deliveryInstructions"
                placeholder="Leave my package by the door"
                value={deliveryDetails.deliveryInstructions}
                onChange={handleChange}
              ></textarea>
            </DeliveryFormField>
            <DeliveryPageButtonsContainer>
              <DeliveryPageButton
                className="delivery-form-cancel-button"
                onClick={toggleConfirmCancelModal}
              >
                CANCEL
              </DeliveryPageButton>
              <DeliveryPageButton
                className="delivery-form-checkout-button"
                onClick={() => {
                  if (
                    deliveryDetails.recipientName &&
                    deliveryDetails.recipientPhoneNumber &&
                    deliveryDetails.deliveryAddress
                  ) {
                    toggleProceedModal();
                  } else {
                    setRecipientNameError(!deliveryDetails.recipientName);
                    setRecipientPhoneNumberError(
                      !deliveryDetails.recipientPhoneNumber
                    );
                    setDeliveryAddressError(!deliveryDetails.deliveryAddress);
                  }
                }}
              >
                CHECKOUT
              </DeliveryPageButton>
            </DeliveryPageButtonsContainer>
          </DeliveryPageForm>
        </DeliveryPageFormContainer>
      </DeliveryPageMainContainer>
    </DeliveryPageWholeContainer>
  );
};

export default DeliveryPage;

{
  /* <Link to="https://paystack.com/pay/traidr" className="checkout-link"></Link> */
}
