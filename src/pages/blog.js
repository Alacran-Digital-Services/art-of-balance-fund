import * as React from "react"

import BlogPreview from "../components/blogPreview"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { getNotionBlogData } from "../utils/graphQL/notionBlogQuery"

const BlogPage = () => {
  const data = getNotionBlogData();

  const blogPreviews = data.allNotion.nodes
    .filter(node => node.title)
    .map(node => (
      <BlogPreview
        key={node.id}
        id={node.id}
        slug={node.properties.slug.value}
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
