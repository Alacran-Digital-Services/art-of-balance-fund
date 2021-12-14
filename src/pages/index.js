import * as React from "react"

import "../styles/global.css"
import "../styles/index.css"

import HomeHeader from "../components/homeHeader"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <HomeHeader></HomeHeader>

    <div className="copyContent">
      <h1 className="secondary">Our Mission</h1>
      <p>
        This is placeholder text. Place your mission here.
      </p>
    </div>

    <div className="copyContent">
      <h1 className="primary">Our Values</h1>
      <p>
        This is placeholder text. Place your values here.
      </p>
    </div>

    <div className="copyContent">
      <h1 className="secondary">Community Engagement</h1>
      <p>
        This is placeholder text. Incorporate a blog here.
      </p>
    </div>
  </Layout>
)

export default IndexPage
