
import { MiniAddToWishListContainer } from "./MiniAddToWishListButton.Styled";
import { BsHeart, BsHeartFill } from "react-icons/bs";

import axiosInstance from "../../utils/axiosInstance";
// import { useEffect, useState } from "react";


interface ButtonProps{
    productId: string|null|undefined;
    isInWishList: boolean;
    onClickAction: ()=> void;
  }
const MiniAddToWishListButton = ({productId, isInWishList, onClickAction}: ButtonProps) => {

  // const [isInWishList, setIsInWishList] = useState<boolean>(false)
  
 

  

    const handleAdd = async()=>{
        const info = {currentProductId: productId}
        try {
            const res = await axiosInstance.post(`/wishlist/add-item`, info);
            if(res.data.success|| res.data.message){
              onClickAction()
              // setIsInWishList(true)
              console.log(`Item added to wishList`);
            }
          } catch (error) {
            console.log(`Error adding to wishlist. Reason:`, error);
          }
    }

    const handleDelete = async()=>{
      const selectedProductDetail = {
        productId: productId,
      };
      try {
        const res = await axiosInstance.post(
          `/wishlist/delete-item`,
          selectedProductDetail
        );
        if (res && res.data.success) {
          onClickAction()
          // setIsInWishList(false)
          console.log(`Item deleted from wishList`);
        }
      } catch (error) {
        console.log(`Error deleting prodct. Reason:`, error);
      }
    }

    
  return (
    <>
   {!isInWishList && <MiniAddToWishListContainer onClick={handleAdd}>
        <BsHeart size={22} className="add-to-wishlist-icon"/>
    </MiniAddToWishListContainer>}

    {isInWishList && <MiniAddToWishListContainer onClick ={handleDelete}>
      <BsHeartFill size={22} color="var(--orange-color)" className="add-to-wishlist-icon"/>
    </MiniAddToWishListContainer>}
    </>
  )
}

export default MiniAddToWishListButton