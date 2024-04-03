import { CartContent, Cartleftcontainer, CartleftcontainerImg, CartleftcontainerText, CartRightContainer, CartItemQtyAndTotal, CartUpdateAndDeleteBtns } from "./CartPage.Styled";

import AddToCartButton from "../../../components/AddToCartButton/AddToCartButton";

//Interface imports
import { CartProductDetail } from "../../../interfaces/cartInterfaces";
import { useState } from "react";
// import axiosInstance from "../../../utils/axiosInstance";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../app/store";


interface CartItemProps {
    cartItem: CartProductDetail ;
    handleDelete: (productId:string)=>void;
  }

const CartItemRow = ({cartItem, handleDelete}: CartItemProps) => {



//FUNCTION TO TOGGLE MODAL VISIBLITY
const [quantityModalVisibility, setQuantityModalVisibility] = useState(false);

const toggleQuantityModal = () => {
  console.log("modalVisible?", quantityModalVisibility);
  setQuantityModalVisibility(!quantityModalVisibility);
};




  return (

    <div>
         <CartContent>
          {/* cartProducts?.map((product)=>{})*/}
          <Cartleftcontainer>

            <CartleftcontainerImg>
              <img src={cartItem.productImage} alt="image" />
            </CartleftcontainerImg>
            <CartleftcontainerText>
              <p className="productHeading">{cartItem.productTitle}</p>
              <p className="productPrice">₦{cartItem.productPrice.toLocaleString()}</p>
              <p className="sourceShop">Seller: {cartItem.sourceShop}</p>
              <p className="productStock">In stock</p>
            </CartleftcontainerText>

          </Cartleftcontainer>


         <CartRightContainer>
          <CartItemQtyAndTotal>
            <p className="cart-item-quantity">Qty: {cartItem.productQuantity}</p>
            <p className="cart-item-total">₦{cartItem.productTotal.toLocaleString()}</p>
          </CartItemQtyAndTotal>
         
        <CartUpdateAndDeleteBtns>
        <AddToCartButton buttonText={`UPDATE`} productId={cartItem.productId} toggleVisibility={toggleQuantityModal}/>
         <div className='delete-item-button' onClick={()=>handleDelete(cartItem.productId)}>Delete Item</div>
        </CartUpdateAndDeleteBtns>
         
          
         </CartRightContainer>
        </CartContent>
    </div>
  )
}

export default CartItemRow