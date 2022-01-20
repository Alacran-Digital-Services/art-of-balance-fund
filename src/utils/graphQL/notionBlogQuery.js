import { useStaticQuery, graphql } from "gatsby";

export function getNotionBlogData() {
    return useStaticQuery(graphql`
        query BlogQuery {
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
                slug {
                value
                }
                subtitle {
                value
                }
            }
            }
        }
        }
  `)
}
