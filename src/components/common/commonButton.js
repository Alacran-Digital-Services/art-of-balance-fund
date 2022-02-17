import * as React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import * as styles from "./commonButton.module.scss"

function CommonButton({ commonButtonData }) {
  const { buttonTitle, slug, isGatsbyLink } = commonButtonData;
  return (
    <div>
      {isGatsbyLink ? (
        <p>
          <Link to={slug} className={styles.commonButton}>
            {buttonTitle}
          </Link>
        </p>
      ) : (
        <a
          target="_blank"
          rel="noreferrer"
          href={slug}
          className={styles.commonButton}
        >
          {buttonTitle}
        </a>
      )}
    </div>
  )
}

CommonButton.propTypes = {
  commonButtonData: PropTypes.shape({
    buttonTitle: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    isGatsbyLink: PropTypes.bool.isRequired
  })
}

export default CommonButton
