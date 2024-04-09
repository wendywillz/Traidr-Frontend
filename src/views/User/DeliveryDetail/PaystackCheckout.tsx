// PaystackCheckout.tsx
import React from 'react';
import { PaystackButton } from 'react-paystack';
// import "StyledPaystackButton from './paystackCheckout.styled';" // Adjust the import path as necessary

interface PaystackCheckoutProps {
 email: string;
 amount: number;
 metadata: {
    custom_fields: Array<{
      display_name: string;
      variable_name: string;
      value: string;
    }>;
 };
 publicKey: string;
}

const PaystackCheckout: React.FC<PaystackCheckoutProps> = ({ email, amount, metadata, publicKey }) => {
 const componentProps = {
    email,
    amount,
    metadata,
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
 };

 return <PaystackButton {...componentProps} />;
};

export default PaystackCheckout;
