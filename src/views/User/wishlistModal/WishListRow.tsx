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
              <img src={wishListItem.productImage} alt="blender" />
            </WishlistleftcontainerImg>
            <WishlistleftcontainerText>
              <p className="wishlistHeading">{wishListItem.productTitle}</p>
              <p className="wishlistDescription">{wishListItem.productDescription}</p>
              <p className="wishlistPrice">₦{wishListItem.productPrice.toLocaleString()} Negotiable</p>
            </WishlistleftcontainerText>
          </Wishlistleftcontainer>
          <WishListRowBtnsContainer>
            <AddToCartButton buttonText={`ADD TO CART`} productId={wishListItem.productId} toggleVisibility={toggleQuantityModal}/>

          <DeleteWishItemBtn onClick={()=>handleDelete(wishListItem.productId)}>DELETE</DeleteWishItemBtn>
          </WishListRowBtnsContainer>
          
        </WishlistContent>
  )
}

export default WishListRow