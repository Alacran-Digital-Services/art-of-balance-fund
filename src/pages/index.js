import * as React from "react"
import "../styles/global.css"
import "../styles/index.css"

import HomeHeader from "../components/homeHeader"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CommonButton from "../components/common/commonButton"
import { generateBlogPreviews } from "../utils/blog/blogPreviewsGenerator"

const IndexPage = () => {
  const TOTAL_BLOG_POSTS = 2;
  const blogPreviews = generateBlogPreviews(TOTAL_BLOG_POSTS);
  
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
