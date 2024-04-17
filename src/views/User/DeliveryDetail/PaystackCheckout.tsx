// PaystackCheckout.tsx
import React from 'react';
import { PaystackButton } from 'react-paystack';
import { useNavigate } from 'react-router-dom';
import { PaystackWholeContainer } from './PaystackCheckout.styled';
// import "StyledPaystackButton from './paystackCheckout.styled';" // Adjust the import path as necessary

interface PaystackCheckoutProps {
 email: string;
 amount: number;
//  metadata: {
//     custom_fields: Array<{
//       display_name: string;
//       variable_name: string;
//       value: string;
//     }>;
//  };
 publicKey: string;
}

const PaystackCheckout: React.FC<PaystackCheckoutProps> = ({ email, amount, publicKey }) => {
   const navigate = useNavigate()
 const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert("Thanks for doing business with us! Come back soon!!")
      navigate("/order/payment")
   },
    onClose: () => alert("Wait! Don't leave :("),
 };

 return (
   <PaystackWholeContainer>
   <PaystackButton {...componentProps} className='paystack-button' />
   </PaystackWholeContainer>
 )
};

export default PaystackCheckout;
