import Header from "../../../components/Header/Header";
import { CartContainer, CartPageTitle, OrderButton, CartHeaderContainer, CartTotal} from "./CartPage.Styled";
import CartItemRow from "./CartItemRow";
import MultipurposeModal from "../../../components/MultipurposeModal/MultipurposeModal";

//Interface imports
import { CartProductDetail } from "../../../interfaces/cartInterfaces";



//packages and tools
import { useState, useEffect } from "react";
import { fetchCartItems } from "../../../api/cart";
import axiosInstance from "../../../utils/axiosInstance";
import { NavigateFunction, useNavigate } from "react-router-dom";



const CartPage = () => {

const navigate:NavigateFunction = useNavigate();




//Functions dealing with the modal
const [modalVisibility, setModalVisibility]= useState(false)
const orderSuccessModalTitle = `ORDER CREATED`
const orderSucessModalMessage =`Your order has successfully been created`
const modalButtonAction = ()=>{
  navigate('/user/my-order')
}
// const toggleModalVisibility = ()=>{
//   setModalVisibility(!modalVisibility)
// }




const [cartProducts, setCartProducts] = useState<CartProductDetail[]>()
const [cartTotal, setCartTotal]= useState<number|undefined>(0)

useEffect(()=>{
  
  fetchCartItems().then((res) => {
    if (res) {
      setCartProducts(res);
      let total = cartProducts?.reduce((acc, curr)=> acc + (curr.productPrice* curr.productQuantity), 0)
      setCartTotal(total)
    }
  });
},[cartProducts])




const handleDelete = async(productId: string)=>{
  const selectedProductDetail = {
      productId: productId
  }
try {
 const res = await axiosInstance.post(`/cart/delete-cart-item`, selectedProductDetail)
 if(res && res.data.success) location.reload()
  console.log(`Product deleted`);
  
  
} catch (error) {
  console.log(`Error deleting product. Reason:` , error);
}

}


const handleOrder = async()=>{
  
  try {
    const res = await axiosInstance.post(`/order/create-order`)
    if(res) {
    setModalVisibility(true)
    console.log(`Order Created`);
  }
  } catch (error) {
    console.log(`Error creating order. Reason:` , error);
  }
 
}

  return (
    <>
    {modalVisibility && <MultipurposeModal title={orderSuccessModalTitle} message={orderSucessModalMessage} onClickAction={modalButtonAction}/>}
      <Header />
      <CartContainer>
        <CartHeaderContainer>
        <CartPageTitle>Cart Total</CartPageTitle>
        <CartTotal>₦{cartTotal?.toLocaleString()}</CartTotal>

        </CartHeaderContainer>
       
        <div>
          {cartProducts?.map((product)=>{
            return(
              <CartItemRow cartItem={product} key={product.productId} handleDelete={handleDelete}/>
            )
          })}
        </div>
        
       
        
        <OrderButton onClick={handleOrder}>PLACE ORDER</OrderButton>
      </CartContainer>
    </>
  );
}


export default CartPage

{/* <ViewMoreButton button_text={"View More"} type={"button"} /> */}