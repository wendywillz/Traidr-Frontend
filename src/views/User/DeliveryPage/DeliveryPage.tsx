//style imports
import { DeliveryPageWholeContainer, DeliveryPageMainContainer, DeliveryPageFormContainer, DeliveryPageForm, DeliveryFormField, DeliveryPageButtonsContainer, DeliveryPageButtons } from "./DeliveryPage.Styled"

//component imports
import Header from "../../../components/Header/Header"
import MultipurposeModal from "../../../components/MultipurposeModal/MultipurposeModal"

//Interface imports
import DeliveryDetailsData from "../../../interfaces/deliveryInterfaces"

//package and tools imports
import { useState, ChangeEvent, FormEvent} from "react"
import axiosInstance from "../../../utils/axiosInstance"
import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import { NavigateFunction, useNavigate } from "react-router-dom";



const DeliveryPage = () => {

    const userId:string|null = useSelector((state: RootState)=> state.user.userId)

    const[deliveryDetails, setDeliveryDetails]= useState<DeliveryDetailsData>({
        recipientName: "",
        recipientPhoneNumber: 0,
        deliveryAddress: "",
        deliveryInstructions: ""
    })

    const handleChange = (e:ChangeEvent<HTMLFormElement| HTMLInputElement| HTMLTextAreaElement>)=>{
        setDeliveryDetails({...deliveryDetails, [e.target.name]:e.target.value})
      }
      

    const handleCheckout = ()=>{

        try {
            axiosInstance.post(`/delivery/add-delivery/${userId}`, deliveryDetails)
            
        } catch (error) {
            console.log(`Problem sending delivery details. Reason:`, error);
        }
      }


    const handleCancel =()=>{
        const info = {
            currentUserId: userId
        }

        try {
            axiosInstance.post('/sale/cancel-sale', info)
            
        } catch (error) {
            console.log(`Problem canceling sale`, error);
        }
      }



  return (
    <DeliveryPageWholeContainer>
        <Header/>
        <DeliveryPageMainContainer>
            <DeliveryPageFormContainer>
                <p className="delivery-form-title">ORDER DELIVERY DETAILS</p>
                <DeliveryPageForm>
                    <DeliveryFormField>
                        <label htmlFor="recipientNameInput" className="delivery-form-label">RECIPIENT FULL NAME</label><br/>
                        <input className="delivery-form-input" type="text" id="recipientNameInput" name="recipientName" placeholder="Jane Doe" value={deliveryDetails.recipientName} onChange={handleChange} />
                    </DeliveryFormField>

                    <DeliveryFormField>
                        <label htmlFor="recipientPhoneNumberInput" className="delivery-form-label">RECIPIENT PHONE NUMBER</label><br/>
                        <input className="delivery-form-input" type="tel" id="recipientPhoneNumberInput" name="recipientPhoneNumber" placeholder="07034249775" value={deliveryDetails.recipientPhoneNumber} onChange={handleChange} />
                    </DeliveryFormField>
                    
                    <DeliveryFormField>
                        <label htmlFor="deliveryAddressInput" className="delivery-form-label">DELIVERY ADDRESS</label><br/>
                        <textarea className="delivery-form-textarea" id="deliveryAddressInput" name="deliveryAddress" placeholder="32, Rasaq Eletu Street, Osapa London, Lagos" value={deliveryDetails.deliveryAddress} onChange={handleChange}>
                        </textarea>
                    </DeliveryFormField>

                    <DeliveryFormField>
                        <label htmlFor="deliveryInstructionsInput" className="delivery-form-label">DELIVERY INSTRUCTIONS (Optional)</label><br/>
                        <textarea className="delivery-form-textarea" id="deliveryInstructionsInput" name="deliveryInstructions" placeholder="Leave my package by the door" value={deliveryDetails.deliveryInstructions} onChange={handleChange}>
                        </textarea>
                    </DeliveryFormField>
                    <DeliveryPageButtonsContainer>
                        <DeliveryPageButtons className="delivery-form-cancel-button" onClick={handleCancel}>CANCEL</DeliveryPageButtons>
                        <DeliveryPageButtons className="delivery-form-checkout-button" onClick={handleCheckout}>CHECKOUT</DeliveryPageButtons>

                    </DeliveryPageButtonsContainer>
                </DeliveryPageForm>
            </DeliveryPageFormContainer>

        </DeliveryPageMainContainer>
    </DeliveryPageWholeContainer>
  )
}

export default DeliveryPage 