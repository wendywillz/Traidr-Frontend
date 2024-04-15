import axiosInstance from "../../utils/axiosInstance";
import { AddToWishListButtonContainer } from "./AddToWishListButton.Styled";

interface ButtonProps {
  productId: string | null | undefined;
}

const AddToWishListButton = ({ productId }: ButtonProps) => {
  const handleSubmit = async () => {
    const info = {
      currentProductId: productId,
    };

    try {
      await axiosInstance.post(`/wishlist/add-item`, info);
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <AddToWishListButtonContainer onClick={handleSubmit}>
        Add to Wishlist
      </AddToWishListButtonContainer>
    </>
  );
};

export default AddToWishListButton;
