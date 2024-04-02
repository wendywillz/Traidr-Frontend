import { AddToCartButtonContainer } from "./AddToCartButton.Styled"
import AddQuantityModal from "../AddQuantityModal/AddQuantityModal"
import { useState } from "react";


interface ButtonProps{
    productId: string| undefined|null;
    toggleVisibility: () => void;
}

const AddToCartButton = ({productId, toggleVisibility}: ButtonProps ) => {

const currentProductId = "test-product-id-2"

const [quantityModalVisibility, setQuantityModalVisibility] = useState(false);

const toggleQuantityModal = () => {
      console.log("modalVisible?", quantityModalVisibility);
      setQuantityModalVisibility(!quantityModalVisibility);
}

  return (
    // <AddToCartComponentContainer>
        <>
       {!quantityModalVisibility && (<AddToCartButtonContainer onClick={toggleQuantityModal}>ADD TO CART
        </AddToCartButtonContainer>) }
        <div className="quantity-modal">{quantityModalVisibility && <AddQuantityModal productId={productId} toggleVisibility={toggleQuantityModal}/>}</div>
        </>
   // </AddToCartComponentContainer>
     

    
  )
}

export default AddToCartButton