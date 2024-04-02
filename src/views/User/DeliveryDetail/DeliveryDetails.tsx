import React, { useState } from 'react';
import { DeliveryDetailsContainer } from './DeliveryDetails.Styled';
import traidrLogo from '../../../assets/traidr-logo-orange.png';


interface FormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  address: string;
  deliveryInstructions: string;
}

const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    deliveryInstructions: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<FormData> = {};

    // validation
    if (!formData.cardNumber || formData.cardNumber.length !== 16) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number.';
    }
    if (!formData.expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Please enter a valid expiry date (MM/YY).';
    }
    if (!formData.cvv || formData.cvv.length !== 3) {
      newErrors.cvv = 'Please enter a valid 3-digit CVV.';
    }
    if (!formData.address) {
      newErrors.address = 'Please enter your address.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form data
      console.log('Form submitted:', formData);
    }
  };

  return (
    <DeliveryDetailsContainer>
    <div className="body-div">
      
      <div className="container">
        <img src={traidrLogo} alt="traidrlogo" />
        
        <form onSubmit={handleSubmit} >
          <div className="form-div">
          <div className="FormContainer">
            <p className='form-p'>Payment Details</p>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="Card Number"
              className="form-input"
            />
            {errors.cardNumber && <p className="form-p-error">{errors.cardNumber}</p>}
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              placeholder="Expiry Date (MM/YY)"
              className="form-input"
            />
            {errors.expiryDate && <p className="form-p-error">{errors.expiryDate}</p>}
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="CVV"
              className="form-input"
            />
            {errors.cvv && <p className="form-p-error">{errors.cvv}</p>}
          </div>
          <div className="FormContainer">
            <p className='form-p'>Delivery Details</p>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="form-input"
            />
            {errors.address && <p className="form-p-error">{errors.address}</p>}
            <input
              type="text"
              name="deliveryInstructions"
              value={formData.deliveryInstructions}
              onChange={handleInputChange}
              placeholder="Delivery Instructions"
              className="form-input"
            />
          </div>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
    </DeliveryDetailsContainer>
  );
};

export default CheckoutPage;
