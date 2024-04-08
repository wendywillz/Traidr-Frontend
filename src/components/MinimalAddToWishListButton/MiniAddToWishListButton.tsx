
import { MiniAddToWishListContainer } from "./MiniAddToWishListButton.Styled";
import { BsHeart } from "react-icons/bs";

import axiosInstance from "../../utils/axiosInstance";


interface ButtonProps{
    productId: string|null|undefined;
  }
const MiniAddToWishListButton = ({productId}: ButtonProps) => {

    const handleSubmit = async()=>{
        const info = {
            currentProductId: productId
        }

        try {
            await axiosInstance.post(`/wishlist/add-item`, info);
            console.log(`Item added to wishList`);
          } catch (error) {
            console.log(`Error adding to wishlist. Reason:`, error);
            
          }
    }


  return (
    <MiniAddToWishListContainer onClick={handleSubmit}>
        <BsHeart size={20} className="add-to-wishlist-icon"/>

    </MiniAddToWishListContainer>
  )
}

export default MiniAddToWishListButton