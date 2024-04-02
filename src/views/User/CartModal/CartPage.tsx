import Header from "../../../components/Header/Header";
import { CartContainer,  CartText, OrderButton } from "./CartPage.Styled";
import CartItemRow from "./CartItemRow";

//Interface imports
import { CartProductDetail } from "../../../interfaces/cartInterfaces";



//packages and tools
import { useState, useEffect } from "react";
import { fetchCartItems } from "../../../api/cart";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import axiosInstance from "../../../utils/axiosInstance";



const CartPage = () => {
const userId:string|null = useSelector((state: RootState)=> state.user.userId)

const [cartProducts, setCartProducts] = useState<CartProductDetail[]>()

useEffect(()=>{
  fetchCartItems(userId).then((res) => {
    if (res) {
      setCartProducts(res);
    }
  });
},[cartProducts])



const handleDelete = async(productId: string)=>{
  const selectedProductDetail = {
      userId: userId,
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

  return (
    <>
      <Header />
      <CartContainer>
        <CartText>
            Your Cart
        </CartText>
        <div>
          {cartProducts?.map((product)=>{
            return(
              <CartItemRow cartItem={product} key={product.productId} handleDelete={handleDelete}/>
            )
          })}
        </div>
        
       
        
        <OrderButton>PLACE ORDER</OrderButton>
      </CartContainer>
    </>
  );
}


export default CartPage

{/* <ViewMoreButton button_text={"View More"} type={"button"} /> */}