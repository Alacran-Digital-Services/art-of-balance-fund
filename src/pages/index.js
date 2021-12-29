import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/global.css"
import "../styles/index.css"

import HomeHeader from "../components/homeHeader"
import BlogPreview from "../components/blogPreview"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
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
    .sort(function (a, b) {
      return new Date(b.date.value.start) - new Date(a.date.value.start)
    })
    .slice(0, 2)
    .map(node => (
      <BlogPreview
        key={node.id}
        id={node.id}
        imgUrl={node.properties.coverImageUrl.value}
        blogTitle={node.title || `Blog Title`}
        excerpt={
          node.properties.subtitle.value || `Short description of the blog.`
        }
        date={node.date.value.start}
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
          <Seo title="Blog" />
          <div> {blogPreviews} </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
