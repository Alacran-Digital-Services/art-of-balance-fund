import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

export default function Template({ pageContext }) {
  const { post } = pageContext

  return (
    <Layout>
      <div className="standardSpacing">
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{post.title}</h1>
            <h4>{post.properties.date.value.start}</h4>
            <span>{post.properties.subtitle.value}</span>
            <img src={post.properties.coverImageUrl.value} />
            <div className="blog-post-content" />
            {post.properties.body.value}
          </div>
        </div>
      </div>
    </Layout>
  )
}
