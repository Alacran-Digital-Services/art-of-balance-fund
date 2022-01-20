import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/global.css"

export default function Template({
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
  const { blog } = pageContext
  console.log("PAGE CONTEXT", blog)
  return (
    <Layout>
      <div className="standardSpacing">
        <div className="blog-post-container">
          {/* <div className="blog-post">
            <h1>{title}</h1>
            <h2>{properties.date.value.start}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: properties.body.value }}
            />
          </div> */}
        </div>
      </div>
    </Layout>
  )
}
//query the individual blogs by slug
// export const pageQuery = graphql`
//   query ($slug: String!) {
//     notion(properties: { blurb: {}, slug: { value: { eq: $slug } } }) {
//       title
//       updatedAt
//       properties {
//         blurb {
//           value
//         }
//         body {
//           value
//         }
//         coverImageUrl {
//           value
//         }
//         date {
//           value {
//             start(fromNow: true)
//           }
//         }
//         slug {
//           value
//         }
//         subtitle {
//           value
//         }
//       }
//     }
//   }
// `
