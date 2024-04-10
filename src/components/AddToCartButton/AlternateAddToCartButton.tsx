import { AddToCartButtonContainer, ButtonWholeContainer } from "./AddToCartButton.Styled"
import AddQuantityModal from "../AddQuantityModal/AddQuantityModal"
import { useState } from "react";


interface ButtonProps{
  buttonText: string;
    productId: string| undefined|null;
    toggleVisibility: () => void;
}

const AlternateAddToCartButton = ({buttonText, productId}: ButtonProps ) => {



const [quantityModalVisibility, setQuantityModalVisibility] = useState(false);





const toggleQuantityModal = () => {
      setQuantityModalVisibility(!quantityModalVisibility);
}

  return (
    // <AddToCartComponentContainer>
        <ButtonWholeContainer>
       {!quantityModalVisibility && (<AddToCartButtonContainer onClick={toggleQuantityModal} className="alternate-add-to-cart-button">{buttonText}
        </AddToCartButtonContainer>) }
        <div className="quantity-modal">{quantityModalVisibility && <AddQuantityModal productId={productId} toggleVisibility={toggleQuantityModal}/>}</div>
        </ButtonWholeContainer>
   // </AddToCartComponentContainer>
     

    
  )
}

export default AlternateAddToCartButton