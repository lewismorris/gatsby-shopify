import React from "react"
import {
  useCheckoutUrl,
  useCartItems,
  useRemoveItemFromCart,
} from "gatsby-theme-shopify-manager"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Cart = () => {
  const checkoutUrl = useCheckoutUrl()
  const cartItems = useCartItems()
  const removeItemFromCart = useRemoveItemFromCart()

  return (
    <Layout>
      <SEO title="Cart" />

      {cartItems.map(item => (
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

      <a href={checkoutUrl} rel="noopener noreferrer">
        Checkout Now →
      </a>
    </Layout>
  )
}

export default Cart
