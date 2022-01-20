import * as React from "react"
import BlogPreview from "../../components/blogPreview"
import { getNotionBlogData } from "../graphQL/notionBlogQuery";

export function generateBlogPreviews(totalBlogPosts) {
    const data = getNotionBlogData();
    let blogPreviews = data.allNotion.nodes
        .filter(node => node.title)
        .sort(function (nodeA, nodeB) {
            return (
                new Date(nodeB.properties.date.value.start) -
                new Date(nodeA.properties.date.value.start)
            )
        })
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
    
    if (totalBlogPosts !== null) {
        blogPreviews = blogPreviews.slice(0, totalBlogPosts);
    }

    return blogPreviews;
}
