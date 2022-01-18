import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/global.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="standardSpacing">
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

//query the individual blogs by slug
export const pageQuery = graphql`
  query {
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
`
//error on line 35: unknown argument "value" on field "NotionProperties.slug"
