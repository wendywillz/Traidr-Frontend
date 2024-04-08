import axiosInstance from "../../utils/axiosInstance";
import { AddToWishListButtonContainer} from "./AddToWishListButton.Styled"




interface ButtonProps{
  productId: string|null|undefined;
}
   

const AddToWishListButton = ({productId}: ButtonProps) => {

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
        <>
      <AddToWishListButtonContainer onClick={handleSubmit}>
        Add to Wishlist
        </ AddToWishListButtonContainer>
        </>
  )
}

export default AddToWishListButton