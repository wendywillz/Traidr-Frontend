import { ChangeEvent, useState } from "react"
import { AddQuantityModalContainer,QuantityModalSection, QuantityCounterButton, ModalInputField, ModalCancelButton, QuantityModalButton} from "./AddQuantityModal.Styled"

interface ModalProps {
    toggleVisiblity: () => void;
  }

const AddQuantityModal = ({toggleVisiblity}:ModalProps) => {

    const[inputValue, setInputValue] = useState(0)

    const increaseQuantity = ()=>{
        setInputValue(inputValue + 1)
    }

    const decreaseQuantity = ()=>{
        if(inputValue > 0) setInputValue(inputValue - 1)

    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setInputValue(parseInt(event.target.value))
    }
    const handleSubmit = ()=>{
        // event.preventDefault()
        console.log(` ${inputValue} PRODUCTS ADD`);
        toggleVisiblity()
    }

  return (
    <AddQuantityModalContainer>
        <ModalCancelButton onClick={toggleVisiblity}>x</ModalCancelButton>
        <QuantityModalSection>
            <QuantityCounterButton id="remove-button" onClick={decreaseQuantity}>-</QuantityCounterButton>
            <ModalInputField >
            <input type="number" id="quantityInput" name="productQuantity" value={inputValue} placeholder={inputValue.toString()} onChange={handleChange} className="quantity-modal-input"/>
            </ModalInputField >
            <QuantityCounterButton id="pos-button" onClick={increaseQuantity}>+</QuantityCounterButton>
        </QuantityModalSection>
        <QuantityModalButton onClick={handleSubmit}>ADD TO CART</QuantityModalButton>
        
    </AddQuantityModalContainer>
  )
} 

export default AddQuantityModal