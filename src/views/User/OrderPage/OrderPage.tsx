/* eslint-disable react-hooks/exhaustive-deps */
//Style imports
import {
  OrderPageContainer,
  OrderPageMain,
  OrderTotal,
  PayNowButton,
  CancelOrderButton,
} from "./OrderPage.Styled";

//component imports
import OrderItemRow from "./OrderItemRow";
import traiderLogo from "../../../assets/traidr-logo-orange.png";
import MultipurposeModal from "../../../components/MultipurposeModal/MultipurposeModal";
import PageLoader from "../../../components/PageLoader/PageLoader";

//Interface imports
import { OrderProductDetail } from "../../../interfaces/orderInterfaces";

//Packages and tools
import { useState, useEffect } from "react";
import { fetchOrderItems } from "../../../api/order";
import axiosInstance from "../../../utils/axiosInstance";
import { NavigateFunction, useNavigate } from "react-router-dom";
import BackButton from "../../../components/BackButton/BackButton";

//import axiosInstance from '../../../utils/axiosInstance'

const OrderPage = () => {
  const navigate: NavigateFunction = useNavigate();

  //Toggling the loader
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //HANDLING THE CONFIRM CANCEL MODAL
  const [confirmationModalVisibility, setConfirmationModalVisibility] =
    useState(false);
  const confirmationModalTitle = `CONFRIM ORDER CANCELLATION`;
  const confirmationModalmessage = `Please confirm you want to cancel your order`;
  const toggleConfirmationModal = () => {
    setConfirmationModalVisibility(!confirmationModalVisibility);
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
  const proceedModalMessage = `Click to continue begin checkout`;
  const toggleProceedModal = () => {
    setProceedModalVisibility(!proceedModalVisibility);
  };

  const [orderItems, setOrderItems] = useState<OrderProductDetail[]>();

  const [orderTotal, setOrderTotal] = useState<number | undefined>(0);

  useEffect(() => {
    fetchOrderItems().then((res: OrderProductDetail[]) => {
      if (res) {
        setOrderItems(res);
        const total = res?.reduce(
          (acc, curr) => acc + curr.productPrice * curr.productQuantity,
          0
        );
        setOrderTotal(total);
        //   console.log(`The total is`, total);
        setIsLoading(false);
      } else {
        navigate("/user/my-cart");
      }
    });
  }, []);

  const cancelOrder = async () => {
    try {
      const res = await axiosInstance.post("/order/cancel-order");
      if (res) {
        setConfirmationModalVisibility(false);
        setOrderCancelledModalVisibility(true);
      }
    } catch (error) {
      return error;
    }
  };

  const createSale = async () => {
    const info = {
      saleTotal: orderTotal,
    };
    try {
      const res = await axiosInstance.post("sale/create-sale", info);
      if (res) {
        navigate("/order/delivery-details");
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <OrderPageContainer>
      {isLoading && (
        <div className="order-page-loader">
          <PageLoader />
        </div>
      )}
      {confirmationModalVisibility && (
        <MultipurposeModal
          title={confirmationModalTitle}
          message={confirmationModalmessage}
          onClickAction={cancelOrder}
          cancelButton={true}
        />
      )}

      {orderCancelledmodalVisibility && (
        <MultipurposeModal
          title={orderCancelledModalTitle}
          message={orderCancelledModalMessage}
          onClickAction={orderCancelledmodalButtonAction}
          cancelButton={false}
        />
      )}

      {proceedModalVisibility && (
        <MultipurposeModal
          title={proceedModalTitle}
          message={proceedModalMessage}
          onClickAction={createSale}
          cancelButton={true}
        />
      )}

      <div className="backButton-container">
        <BackButton linkTo={"/user/my-cart"} />
      </div>
      <OrderPageMain>
        <div className="order-page-traidr-logo-container">
          <img src={traiderLogo} className="order-page-traidr-logo" />
        </div>
        <h2 className="order-page-Title">Your Order</h2>
        <div>
          {orderItems?.map((orderItem) => {
            return (
              <div>
                <OrderItemRow orderItem={orderItem} key={orderItem.productId} />
                {/* <hr/> */}
              </div>
            );
          })}
        </div>

        <OrderTotal>
          <div className="order-total-text">ORDER TOTAL</div>
          <div className="order-total-amount">
            ₦{orderTotal?.toLocaleString()}
          </div>
        </OrderTotal>
        <PayNowButton onClick={toggleProceedModal}>CHECKOUT</PayNowButton>
        <CancelOrderButton onClick={toggleConfirmationModal}>
          CANCEL ORDER
        </CancelOrderButton>
      </OrderPageMain>
    </OrderPageContainer>
  );
};

export default OrderPage;
