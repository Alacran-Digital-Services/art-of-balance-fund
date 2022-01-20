import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { generateBlogPreviews } from "../utils/blog/blogPreviewsGenerator"

const BlogPage = () => {
  const blogPreviews = generateBlogPreviews();
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
