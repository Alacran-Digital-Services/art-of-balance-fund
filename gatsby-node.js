exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

  //gathering all of the blogs by slug. We will then
  //loop through all of them and create a template
  const result = await graphql(`
    {
      allNotion {
        nodes {
          properties {
            slug {
              value
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allNotion.nodes.forEach(node => {
    createPage({
      path: node.properties.slug.value,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.properties.slug.value,
      },
    })
  })
}
