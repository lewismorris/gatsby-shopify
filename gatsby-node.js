const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve("src/templates/product.js")

  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            shopifyId
            variants {
              shopifyId
              price
              title
            }
            description
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allShopifyProduct.edges.forEach(edge => {
      createPage({
        path: `product/${edge.node.shopifyId}`,
        component: productTemplate,
        context: {
          product: edge.node,
        },
      })
    })
  })
}
