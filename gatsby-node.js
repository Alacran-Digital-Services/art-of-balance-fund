exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(
    `./src/pages/blogs/{Notion.properties__slug__value}.js`
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
      path: `/blogs${node.properties.slug.value}`,
      component: blogPostTemplate,
      context: {
        post: node,
        // additional data can be passed via context
        // slug: node.properties.slug.value,
        // title: node.title,
        // body: node.properties.body.value,
        // date: node.properties.date.value.start,
      },
    })
  })
}
