import { CartContent, Cartleftcontainer, CartleftcontainerImg, CartleftcontainerText, CartRightContainer,  CartUpdateAndDeleteBtns } from "./CartPage.Styled";

import AddToCartButton from "../../../components/AddToCartButton/AddToCartButton";
// import AddToWishListButton from "../../../components/AddToWishListButton/AddToWishListButton";

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
  setQuantityModalVisibility(!quantityModalVisibility);
};




  return (

    <div>
         <CartContent>
          {/* cartProducts?.map((product)=>{})*/}
          <Cartleftcontainer>

            <CartleftcontainerImg>
              <img src={cartItem.productImage} alt="image" className="card-item-image" />
            </CartleftcontainerImg>
            <CartleftcontainerText>
              <p className="productHeading">{cartItem.productTitle}</p>
              <p className="cart-item-quantity">Qty: {cartItem.productQuantity}</p>
              <p className="cart-item-total">Total: ₦{cartItem.productTotal.toLocaleString()}</p>
              <p className="productPrice">unit: ₦{cartItem.productPrice.toLocaleString()}</p>
              <p className="sourceShop">Seller: {cartItem.sourceShop}</p>
              <p className="productStock">In stock</p>
            </CartleftcontainerText>

          </Cartleftcontainer>


         <CartRightContainer>
        <CartUpdateAndDeleteBtns>
        <AddToCartButton buttonText={`UPDATE`} productId={cartItem.productId} toggleVisibility={toggleQuantityModal}/>
         <div className='delete-item-button' onClick={()=>handleDelete(cartItem.productId)}>Remove</div>
        </CartUpdateAndDeleteBtns>
         
          
         </CartRightContainer>
        </CartContent>
    </div>
  )
}

export default CartItemRow


//Removed items
/*
<div className="add-to-wishlist-btn-container"><AddToWishListButton productId={cartItem.productId}/></div>
 */