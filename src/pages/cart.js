import React from "react"
import {
  useCheckoutUrl,
  useRemoveItemFromCart,
  useCart,
} from "gatsby-theme-shopify-manager"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Cart = () => {
  const cart = useCart()
  const removeItemFromCart = useRemoveItemFromCart()

  return (
    <Layout>
      <SEO title="Cart" />

      <h4>Your Cart</h4>

      {cart &&
        cart.lineItems.map(item => (
          <div key={item.id} style={{ marginBottom: 24 }}>
            <h3>{item.title}</h3>
            <span style={{ marginRight: 16 }}>Type: {item.variant.title}</span>
            <span style={{ marginRight: 16 }}>£{item.variant.price}</span>
            <span style={{ marginRight: 16 }}>QTY: {item.quantity}</span>
            <button onClick={() => removeItemFromCart(item.variant.id)}>
              Remove
            </button>
          </div>
        ))}

      <div style={{ marginBottom: 32 }}>
        <h4>Total</h4>
        <span>£{cart && cart.totalPrice}</span>
      </div>

      <a href={cart && cart.webUrl} rel="noopener noreferrer">
        Checkout Now →
      </a>
    </Layout>
  )
}

export default Cart
