import { useStaticQuery, graphql, Link } from "gatsby"
import * as React from "react"

import "../styles/global.css"

import BlogPreview from "../components/blogPreview"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
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
                start(formatString: "MM/DD/yyy")
              }
            }
            subtitle {
              value
            }
          }
        }
      }
    }
  `)

  const blogPreviews = data.allNotion.nodes
    .filter(node => node.title)
    .map(node => (
      <BlogPreview
        key={node.id}
        id={node.id}
        imgUrl={node.properties.coverImageUrl.value}
        blogTitle={node.title || `Blog Title`}
        excerpt={
          node.properties.subtitle.value || `Short description of the blog.`
        }
        date={node.properties.date.value.start}
      />
    ))

  return (
    <Layout>
      <div className="standardSpacing">
        <Seo title="Blog" />
        <h1>Blog</h1>
        <div> {blogPreviews} </div>
      </div>
    </Layout>
  )
}

export default BlogPage
