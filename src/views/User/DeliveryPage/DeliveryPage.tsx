//style imports
import {
  DeliveryPageWholeContainer,
  DeliveryPageMainContainer,
  DeliveryPageFormContainer,
  DeliveryPageForm,
  DeliveryFormField,
  DeliveryPageButtonsContainer,
  DeliveryPageButton,
} from "./DeliveryPage.Styled";

//component imports
import Header from "../../../components/Header/Header";
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
  const proceedModalTitle = `PROCEED TO PAYMENT`;
  const proceedModalMessage = `Click to proceed to payment`;
  const proceedModalButtonAction = () => {
    navigate("/order/payment");
  };

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
        console.log(`Delivery details have been added`);
        setProceedModalVisibility(true);
      }
    } catch (error) {
      console.log(`Problem sending delivery details. Reason:`, error);
    }
  };

  const handleCancel = async () => {
    try {
      const res = await axiosInstance.post("/sale/cancel-sale");
      if (res) {
        setConfirmCancelModalVisibility(false);
        setOrderCancelledModalVisibility(true);
        console.log(`ORDER CANCELLED`);
      }
    } catch (error) {
      console.log(`Problem canceling sale`, error);
    }
  };

  return (
    <DeliveryPageWholeContainer>
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

      {proceedModalVisibility && (
        <MultipurposeModal
          title={proceedModalTitle}
          message={proceedModalMessage}
          onClickAction={proceedModalButtonAction}
        />
      )}

      <Header />
      <DeliveryPageMainContainer>
        <DeliveryPageFormContainer>
          <p className="delivery-form-title">ORDER DELIVERY DETAILS</p>
          <DeliveryPageForm>
            <DeliveryFormField>
              <label
                htmlFor="recipientNameInput"
                className="delivery-form-label"
              >
                RECIPIENT FULL NAME
              </label>
              <br />
              <input
                className="delivery-form-input"
                type="text"
                id="recipientNameInput"
                name="recipientName"
                placeholder="Jane Doe"
                value={deliveryDetails.recipientName}
                onChange={handleChange}
              />
            </DeliveryFormField>

            <DeliveryFormField>
              <label
                htmlFor="recipientPhoneNumberInput"
                className="delivery-form-label"
              >
                RECIPIENT PHONE NUMBER
              </label>
              <br />
              <input
                className="delivery-form-input"
                type="tel"
                id="recipientPhoneNumberInput"
                name="recipientPhoneNumber"
                placeholder="07034249775"
                value={deliveryDetails.recipientPhoneNumber}
                onChange={handleChange}
              />
            </DeliveryFormField>

            <DeliveryFormField>
              <label
                htmlFor="deliveryAddressInput"
                className="delivery-form-label"
              >
                DELIVERY ADDRESS
              </label>
              <br />
              <textarea
                className="delivery-form-textarea"
                id="deliveryAddressInput"
                name="deliveryAddress"
                placeholder="32, Rasaq Eletu Street, Osapa London, Lagos"
                value={deliveryDetails.deliveryAddress}
                onChange={handleChange}
              ></textarea>
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
                onClick={handleCheckout}
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
