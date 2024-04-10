import { BsBagPlus } from "react-icons/bs";
import { MiniAddToCartContainer } from "./MiniAddToCartButton.Styled";
import AddQuantityModal from "../AddQuantityModal/AddQuantityModal";

import { useState } from 'react'



interface ButtonProps{
      productId: string| undefined|null;
    //   toggleVisibility: () => void;
  }

const MiniAddToCartButton = ({productId}: ButtonProps) => {

    const [quantityModalVisibility, setQuantityModalVisibility] = useState(false);

    const toggleQuantityModal = () => {
          setQuantityModalVisibility(!quantityModalVisibility);
    }


  return (
    <MiniAddToCartContainer>
    {!quantityModalVisibility && (
        <BsBagPlus size={22} onClick={toggleQuantityModal} className="add-to-cart-icon"/>
    ) }

    <div className="quantity-modal">{quantityModalVisibility && <AddQuantityModal productId={productId} toggleVisibility={toggleQuantityModal}/>}</div>
    </MiniAddToCartContainer>
  )
}

export default MiniAddToCartButton