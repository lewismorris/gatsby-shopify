import React from "react"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Product = ({ pageContext: { product } }) => {
  const addToCart = useAddItemToCart()

  return (
    <Layout>
      <SEO title={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      {product.variants.map(variant => (
        <div key={variant.shopifyId}>
          <h2>{variant.title}</h2>
          <span>£{variant.price}</span>
          <button onClick={() => addToCart(variant.shopifyId, 1)}>
            Add to cart
          </button>
        </div>
      ))}
    </Layout>
  )
}

export default Product
