import * as React from "react"
import "../styles/global.css"
import "../styles/index.css"

import HomeHeader from "../components/homeHeader"
import BlogPreview from "../components/blogPreview"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CommonButton from "../components/common/commonButton"
import { getNotionBlogData } from "../utils/graphQL/notionBlogQuery"

const IndexPage = () => {
  const data = getNotionBlogData();

  const blogPreviews = data.allNotion.nodes
    .filter(node => node.title)
    .sort(function (nodeA, nodeB) {
      return (
        new Date(nodeB.properties.date.value.start) -
        new Date(nodeA.properties.date.value.start)
      )
    })
    .slice(0, 3)
    .map(node => (
      <BlogPreview
        key={node.id}
        id={node.id}
        imgUrl={node.properties.coverImageUrl.value}
        blogTitle={node.title || `Blog Title`}
        slug={node.properties.slug.value}
        excerpt={
          node.properties.subtitle.value || `Short description of the blog.`
        }
        date={node.properties.date.value.start}
      />
    ))

  return (
    <Layout>
      <Seo title="Home" />

      <HomeHeader></HomeHeader>

      <div className="copyContent">
        <h1 className="secondary">Our Mission</h1>
        <p>This is placeholder text. Place your mission here.</p>
      </div>

      <div className="copyContent">
        <h1 className="primary">Our Values</h1>
        <p>This is placeholder text. Place your values here.</p>
      </div>

      <div className="copyContent">
        <h1 className="secondary">Community Engagement</h1>
        <div className="standardSpacing">
          <Seo title="Home" />
          <div> {blogPreviews} </div>
          <CommonButton
            buttonTitle="View all"
            isGatsbyLink={true}
            slug={"/blog"}
          ></CommonButton>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
