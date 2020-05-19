import React from "react";
import StripeCheckout from "react-stripe-checkout";
const handleToken = token => {
  console.log(token);
  alert("Payment Successfull");
};
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_wzjKLa0SOfqM9jeJ026HzZ9Z";
  return (
    <StripeCheckout
      label="Pay Now"
      name="Shoppie"
      image="https://sendeyo.com/up/d/f3eb2117da"
      billingAddress
      shippingAddress
      description={`Your total amount $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={handleToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
