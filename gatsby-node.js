const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const productTemplate = path.resolve("src/templates/product-details.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              name
              slug
              price
              excerpt
              image
              description
              tag
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.erros) {
      return Promise.reject(res.erros)
    }
    
    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: `/${node.frontmatter.slug}`,
        component: productTemplate,
        context:{
          slug: node.frontmatter.slug
        }
      })
    }
    )
  })
}
