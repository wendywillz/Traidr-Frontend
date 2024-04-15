import Header from "../../../components/Header/Header";
import {
  CartContainer,
  CartPageTitle,
  OrderButton,
  CartHeaderContainer,
  CartTotal,
} from "./CartPage.Styled";
import CartItemRow from "./CartItemRow";
import MultipurposeModal from "../../../components/MultipurposeModal/MultipurposeModal";

//Interface imports
import { CartProductDetail } from "../../../interfaces/cartInterfaces";

//packages and tools
import { useState, useEffect } from "react";
import { fetchCartItems } from "../../../api/cart";
import axiosInstance from "../../../utils/axiosInstance";
import { NavigateFunction, useNavigate } from "react-router-dom";
import PageLoader from "../../../components/PageLoader/PageLoader";
import BackButton from "../../../components/BackButton/BackButton";

const CartPage = () => {
  const navigate: NavigateFunction = useNavigate();

  //Toggling the loader
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //Functions dealing with the modal
  const [modalVisibility, setModalVisibility] = useState(false);
  const orderSuccessModalTitle = `ORDER CREATED`;
  const orderSucessModalMessage = `Your order has successfully been created`;
  // const modalButtonAction = () => {
  //   navigate('/order/new-order');
  // };
  const toggleModalVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  const [cartProducts, setCartProducts] = useState<CartProductDetail[]>();
  const [cartTotal, setCartTotal] = useState<number | undefined>(0);
  const [cartEmpty, setCartEmpty] = useState<boolean>(false);

  useEffect(() => {
    fetchCartItems().then((res: CartProductDetail[]) => {
      if (res) {
        setCartProducts(res);
        const total = res?.reduce(
          (acc, curr) => acc + curr.productPrice * curr.productQuantity,
          0
        );
        setCartTotal(total);
        setIsLoading(false);
      } else {
        setCartEmpty(true);
        setIsLoading(false);
      }
    });
  }, [cartProducts]);

  const handleDelete = async (productId: string) => {
    const selectedProductDetail = {
      productId: productId,
    };
    try {
      const res = await axiosInstance.post(
        `/cart/delete-cart-item`,
        selectedProductDetail
      );
      if (res && res.data.success) location.reload();
    } catch (error) {
      return error;
    }
  };
  const handleMoveToWishList = async (productId: string) => {
    const selectedProductDetail = {
      productId: productId,
    };
    try {
      const res = await axiosInstance.post(
        `/cart/move-to-wishlist`,
        selectedProductDetail
      );
      if (res && res.data.success) location.reload();
    } catch (error) {
      return error;
    }
  };

  const handleOrder = async () => {
    try {
      const res = await axiosInstance.post(`/order/create-order`);
      if (res.data.success || res.data.message) {
        navigate("/order/new-order");
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      {isLoading && <PageLoader />}
      {modalVisibility && (
        <MultipurposeModal
          title={orderSuccessModalTitle}
          message={orderSucessModalMessage}
          onClickAction={handleOrder}
          cancelButton={true}
        />
      )}
      <Header />
      <BackButton linkTo={"/dashboard"} />
      <CartContainer>
        <CartHeaderContainer>
          <CartPageTitle>Cart Total</CartPageTitle>
          <CartTotal>₦{cartTotal?.toLocaleString()}</CartTotal>
        </CartHeaderContainer>
        {cartEmpty && <p className="empty-cart-notice">No Items in Cart.</p>}

        <div>
          {cartProducts?.map((product) => {
            return (
              <CartItemRow
                cartItem={product}
                key={product.productId}
                handleDelete={handleDelete}
                handleMoveToWishList={handleMoveToWishList}
              />
            );
          })}
        </div>
        <OrderButton onClick={toggleModalVisibility}>PLACE ORDER</OrderButton>
      </CartContainer>
    </>
  );
};

export default CartPage;

{
  /* <ViewMoreButton button_text={"View More"} type={"button"} /> */
}
