import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as styles from "../components/blogPreview.module.css"
import CommonButton from "./common/commonButton"

const BlogPreview = ({ blogTitle, date, id, excerpt, imgUrl, slug }) => (
  <div className={styles.blog}>
    <div className={styles.description}>
      <p>{date}</p>
      <img src={imgUrl} alt="blog" />
      <h2>
        <Link to={`/blog${slug}`} className={styles.title}>
          {blogTitle}
        </Link>
      </h2>
      <p>{excerpt}</p>
      <CommonButton
        buttonTitle="Read more"
        slug={`/blog${slug}`}
        isGatsbyLink={true}
      ></CommonButton>
    </div>
  </div>
)

BlogPreview.propTypes = {
  blogTitle: PropTypes.string,
  excerpt: PropTypes.string,
}

BlogPreview.defaultProps = {
  blogTitle: ``,
  excerpt: ``,
}

export default BlogPreview
