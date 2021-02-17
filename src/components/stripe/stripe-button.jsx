import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import logo from '../../assets/logo_stripe.svg'

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100
  const publishableKey = 'pk_test_VrvIdunBklbn3cLEgE4O5s11004aubI4yX'

  const onToken = (token) => {
    console.log(token)
    alert('Payment successful!')
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="inVogue ltd."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is ${price} $`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
