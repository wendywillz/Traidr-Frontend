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

const CartPage = () => {
  const navigate: NavigateFunction = useNavigate();


  //Toggling the loader
  const [isLoading, setIsLoading] = useState<boolean>(true)

  //Functions dealing with the modal
  const [modalVisibility, setModalVisibility] = useState(false);
  const orderSuccessModalTitle = `ORDER CREATED`;
  const orderSucessModalMessage = `Your order has successfully been created`;
  const modalButtonAction = () => {
    navigate('/order/new-order');
  };
  // const toggleModalVisibility = ()=>{
  //   setModalVisibility(!modalVisibility)
  // }

  const [cartProducts, setCartProducts] = useState<CartProductDetail[]>();
  const [cartTotal, setCartTotal] = useState<number | undefined>(0);

  useEffect(() => {
    fetchCartItems().then((res) => {
      if (res) {
        setCartProducts(res);
        const total = cartProducts?.reduce(
          (acc, curr) => acc + curr.productPrice * curr.productQuantity,
          0
        );
        setCartTotal(total);
        setIsLoading(false)
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
      /* empty */
    }
  };

  const handleOrder = async () => {
    try {
      const res = await axiosInstance.post(`/order/create-order`);
      if (res.data.success || res.data.message) {
        setModalVisibility(true);
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <>
    {isLoading && <PageLoader/>}
      {modalVisibility && (
        <MultipurposeModal
          title={orderSuccessModalTitle}
          message={orderSucessModalMessage}
          onClickAction={modalButtonAction}
          cancelButton={true}
        />
      )}
      <Header />
      <CartContainer>
        <CartHeaderContainer>
          <CartPageTitle>Cart Total</CartPageTitle>
          <CartTotal>₦{cartTotal?.toLocaleString()}</CartTotal>
        </CartHeaderContainer>

        <div>
          {cartProducts?.map((product) => {
            return (
              <CartItemRow
                cartItem={product}
                key={product.productId}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
        <OrderButton onClick={handleOrder}>PLACE ORDER</OrderButton>
      </CartContainer>
    </>
  );
};

export default CartPage;

{
  /* <ViewMoreButton button_text={"View More"} type={"button"} /> */
}
