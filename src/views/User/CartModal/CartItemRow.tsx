import { CartContent, Cartleftcontainer, CartleftcontainerImg, CartleftcontainerText, CartRightContainer, CartUpdateAndDeleteBtns } from "./CartPage.Styled";

import AlternateAddToCartButton from "../../../components/AddToCartButton/AlternateAddToCartButton";



//Interface imports
import { CartProductDetail } from "../../../interfaces/cartInterfaces";
import { useState } from "react";


interface CartItemProps {
    cartItem: CartProductDetail ;
    handleDelete: (productId:string)=>void;
    handleMoveToWishList: (productId:string)=>void;
  }

const CartItemRow = ({cartItem, handleDelete, handleMoveToWishList}: CartItemProps) => {



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
              <p className="productPrice">u/p: ₦{cartItem.productPrice.toLocaleString()}</p>
              <p className="sourceShop">Seller: {cartItem.sourceShop}</p>
              <p className="productStock">In stock</p>
            </CartleftcontainerText>

          </Cartleftcontainer>


         <CartRightContainer>
        <CartUpdateAndDeleteBtns>
        <div className="move-to-wishlist-button" onClick={()=>handleMoveToWishList(cartItem.productId)}>Move To WishList</div>
        <AlternateAddToCartButton buttonText={`UPDATE`} productId={cartItem.productId} toggleVisibility={toggleQuantityModal}/>
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