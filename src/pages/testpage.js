import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/global.css"
import "../styles/index.css"

import HomeHeader from "../components/homeHeader"
import BlogPreview from "../components/blogPreview"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CommonButton from "../components/common/commonButton"

const IndexPage = () => {
  const result = useStaticQuery(graphql`
    query aQuery {
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
  `)

  console.log(result.allNotion.nodes[0].properties.slug.value)

  return <Layout></Layout>
}
export default IndexPage
