import { useState } from 'react';
import { DeliveryDetailsContainer } from "./DeliveryDetails.Styled";
import traidrLogo from '../../../assets/traidr-logo-orange.png';



const CheckoutPage = () => {
const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
});

const [deliveryDetails, setDeliveryDetails] = useState({
    address: '',
    deliveryInstructions: '',
});

const handleCardDetailsChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setCardDetails({ ...cardDetails, [name]: value });
};

  const handleDeliveryDetailsChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setDeliveryDetails({ ...deliveryDetails, [name]: value });
  };

  const handleFormSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    //  form submission logic should be here
  };

  return (
    <div>
        <DeliveryDetailsContainer>
            <div className='body-div'>

    <div className="container">
        <img src={traidrLogo} alt="traidrlogo" />

        <div className='form-div'>
      {/* Left Form for Card Details */}
      <div className="form-container">
        <p className='form-p'>Card Details</p>
        <input className="form-input"
          type="text"
          name="cardNumber"
          value={cardDetails.cardNumber}
          onChange={handleCardDetailsChange}
          placeholder="Card Number"
        />
        <input className="form-input"
          type="text"
          name="expiryDate"
          value={cardDetails.expiryDate}
          onChange={handleCardDetailsChange}
          placeholder="Expiry Date"
        />
         <input className="form-input"
        type="text"
        name="cvv"
        value={cardDetails.cvv}
        onChange={handleCardDetailsChange}
        placeholder="CVV"
      />
      </div>

      {/* Right Form for Delivery Details */}
      <div className="form-container">
        <p className='form-p'>Delivery Details</p>
        <input className="form-input"
          type="text"
          name="address"
          value={deliveryDetails.address}
          onChange={handleDeliveryDetailsChange}
          placeholder="Address"
        />
        <textarea className="form-input"
          name="deliveryInstructions"
          value={deliveryDetails.deliveryInstructions}
          onChange={handleDeliveryDetailsChange}
          placeholder="Delivery Instructions">
        </textarea>
      </div>
        </div>

      {/* Submit Button */}
      <button className="submit-button" onClick={handleFormSubmit}>Complete Purchase</button>
    </div>
    </div>
    </DeliveryDetailsContainer>
    </div>
    
  );
};

export default CheckoutPage;
