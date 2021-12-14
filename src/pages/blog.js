import { useStaticQuery, graphql, Link } from "gatsby";
import * as React from "react"

import "../styles/global.css"

import BlogPreview from "../components/blogPreview";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query BlogPosts {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
                nodes {
                    frontmatter {
                        title
                        excerpt
                        slug
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    `)

    const blogPreviews = data.allMarkdownRemark.nodes.map((node) =>
        <BlogPreview
            key={node.frontmatter.slug}
            blogTitle={node.frontmatter.title || `Blog Title`}
            excerpt={node.frontmatter.excerpt || `Short description of the blog.`}
            date={node.frontmatter.date}
            slug={node.frontmatter.slug} />
    )

    return (
        <Layout>
            <div className="standardSpacing">
                <Seo title="Blog" />
                <h1>My Thoughts</h1>
                <p>Thanks for visiting this page. You could've been anywhere else on the internet, but you're here. For that, I thank you. Below you'll find posts I've written. I hope you enjoy! If you'd like to reach me, please don't hesitate to use the contact form <Link to="/contact-me">here.</Link></p>
                <div> {blogPreviews} </div>
            </div>
        </Layout>
    )
}

export default BlogPage