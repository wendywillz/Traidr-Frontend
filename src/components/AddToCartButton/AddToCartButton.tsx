import { AddToCartButtonContainer } from "./AddToCartButton.Styled"
import AddQuantityModal from "../AddQuantityModal/AddQuantityModal"
import { useState } from "react";


interface ButtonProps{
  buttonText: string;
    productId: string| undefined|null;
    toggleVisibility: () => void;
}

const AddToCartButton = ({buttonText, productId}: ButtonProps ) => {



const [quantityModalVisibility, setQuantityModalVisibility] = useState(false);

const toggleQuantityModal = () => {
      setQuantityModalVisibility(!quantityModalVisibility);
}

  return (
    // <AddToCartComponentContainer>
        <>
       {!quantityModalVisibility && (<AddToCartButtonContainer onClick={toggleQuantityModal}>{buttonText}
        </AddToCartButtonContainer>) }
        <div className="quantity-modal">{quantityModalVisibility && <AddQuantityModal productId={productId} toggleVisibility={toggleQuantityModal}/>}</div>
        </>
   // </AddToCartComponentContainer>
     

    
  )
}

export default AddToCartButton