/* eslint-disable no-undef */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogTemplate = require.resolve(
    `./src/template/blogTemplate.js`
  )

  //gathering all of the blogs by slug. We will then
  //loop through all of them and create a template
  const result = await graphql(`
    {
      allNotion {
        nodes {
          id
          title
          properties {
            blurb {
              value
            }
            body {
              value
            }
            coverImageUrl {
              value
            }
            date {
              value {
                start(fromNow: true)
              }
            }
            slug {
              value
            }
            subtitle {
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
      path: `/blog${node.properties.slug.value}`,
      component: blogTemplate,
      context: {
        post: node,
      },
    })
  })
}
