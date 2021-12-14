import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./commonButton.module.css";

const CommonButton = ({ buttonTitle, slug, isGatsbyLink }) => {

    return (
        <div>
            {isGatsbyLink
                ? <p><Link to={slug} className={styles.button}>{buttonTitle}</Link></p>
                : <a target="_blank" rel="noreferrer" href={slug} className={styles.button}>{buttonTitle}</a>
            }
        </div>
    )
}

export default CommonButton
