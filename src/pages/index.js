import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      {data.allShopifyProduct.edges.map(({ node }) => (
        <Link key={node.shopifyId} to={`/product/${node.shopifyId}`}>
          <article>
            <h1>{node.title}</h1>
            <img src={node.images[0].originalSrc} alt={node.title} />
          </article>
        </Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          title
          images {
            originalSrc
          }
          shopifyId
        }
      }
    }
  }
`

export default IndexPage
