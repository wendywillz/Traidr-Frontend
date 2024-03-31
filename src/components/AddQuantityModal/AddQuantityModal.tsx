//style imports
import { AddQuantityModalContainer,QuantityModalSection, QuantityCounterButton, ModalInputField, ModalCancelButton, QuantityModalButton} from "./AddQuantityModal.Styled"

//package imports
import { ChangeEvent, useState, useEffect } from "react"
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";



interface CartDetails{
  currentUserId: string|null;
  currentProductId: string| undefined|null;
  productQuantity: number;
}

 interface ModalProps {
  productId: string| undefined|null;
  toggleVisibility: () => void;
//     quantity: number;
//     increaseQuantity: ()=>void;
//     decreaseQuantity: ()=>void;
//     handleChange: ()=>void;
//     handleSubmit: (e: ChangeEvent)=>void;
  }

const AddQuantityModal = ({productId, toggleVisibility}: ModalProps) => {
    const currentUserId:string|null = useSelector((state: RootState)=> state.user.userId)
    const[quantity, setQuantity] = useState<number>(0)
    const [cartData, setCartData]= useState<CartDetails>({
      currentUserId:currentUserId, 
      currentProductId: productId,
      productQuantity:0,
     })
    // const [quantityModalVisibility, setQuantityModalVisibility] = useState(false);


     //function to make modal visible
    // const toggleVisibility = () => {
    //   console.log("profile", quantityModalVisibility);
    //   setQuantityModalVisibility(!quantityModalVisibility);
    // };

    //functions to change quantity with buttons and input field

    useEffect(()=>{
      setCartData({ ...cartData, productQuantity:quantity})
    }, [quantity])
    const increaseQuantity = ()=>{
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = ()=>{
        if(quantity > 0) {setQuantity(quantity - 1)
        }

    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
      setQuantity(parseInt(event.target.value));
    }

    //function to handle submit
    const handleSubmit = async()=>{
      if (quantity > 0){
            // event.preventDefault()
            try {
                 await axiosInstance.post(`/cart/add-to-cart/`, cartData)
                 console.log(` ${quantity} PRODUCTS ADDED TO CART`);
                } catch (error) {
                  console.log(`Error adding item to cart. Reason:`, error); 
                    }
            // console.log(` ${quantity} PRODUCTS ADDED`);
            // console.log(`The product id is ${productId}`);
            // console.log(`The user id is ${currentUserId}`);
            console.log(cartData);
            toggleVisibility()
      } else{
        toggleVisibility()
      } 
    }

  return (
    <AddQuantityModalContainer>
        <ModalCancelButton onClick={toggleVisibility}>x</ModalCancelButton>
        <QuantityModalSection>
            <QuantityCounterButton id="remove-button" onClick={decreaseQuantity}>-</QuantityCounterButton>
            <ModalInputField >
            <input type="number" id="quantityInput" name="productQuantity" value={quantity} placeholder={quantity.toString()} onChange={handleChange} className="quantity-modal-input"/>
            </ModalInputField >
            <QuantityCounterButton id="pos-button" onClick={increaseQuantity}>+</QuantityCounterButton>
        </QuantityModalSection>
        <QuantityModalButton onClick={handleSubmit}>ADD TO CART</QuantityModalButton>
        
    </AddQuantityModalContainer>
  )
} 

export default AddQuantityModal


// {quantity, toggleVisiblity, increaseQuantity, decreaseQuantity, handleChange, handleSubmit}:ModalProps