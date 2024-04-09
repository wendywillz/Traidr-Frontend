import { useState } from 'react'
import {
    DeleteWishItemBtn,
    WishlistContent,
    Wishlistleftcontainer,
    WishlistleftcontainerImg,
    WishlistleftcontainerText,
    WishListRowBtnsContainer
  } from "./Wishlist.styled";

import { WishListProductDetail } from '../../../interfaces/wishListInterface';
import AddToCartButton from '../../../components/AddToCartButton/AddToCartButton';


  interface WishListRowProps {
    wishListItem: WishListProductDetail ;
    handleDelete: (productId:string)=>void;
  }

const WishListRow = ({wishListItem, handleDelete}:WishListRowProps) => {

    const [quantityModalVisibility, setQuantityModalVisibility] = useState(false);

    const toggleQuantityModal = () => {
      setQuantityModalVisibility(!quantityModalVisibility);
    };


  return ( 
    <WishlistContent>
          <Wishlistleftcontainer>
            <WishlistleftcontainerImg>
              <img src={wishListItem.productImage} className="wishlist-item-image" alt="blender" />
            </WishlistleftcontainerImg>
            <WishlistleftcontainerText>
              <p className="wishlistHeading">{wishListItem.productTitle}</p>
              <p className="wishlistDescription">{wishListItem.productDescription.substring(0, 30)}{wishListItem.productDescription.length >= 30 ? "..." : ""}</p>
              <p className="wishlistPrice">₦{wishListItem.productPrice.toLocaleString()}</p>
            </WishlistleftcontainerText>
          </Wishlistleftcontainer>
          <WishListRowBtnsContainer>
            <AddToCartButton buttonText={`ADD TO CART`} productId={wishListItem.productId} toggleVisibility={toggleQuantityModal}/>

          <DeleteWishItemBtn onClick={()=>handleDelete(wishListItem.productId)}>REMOVE</DeleteWishItemBtn>
          </WishListRowBtnsContainer>
          
        </WishlistContent>
  )
}

export default WishListRow