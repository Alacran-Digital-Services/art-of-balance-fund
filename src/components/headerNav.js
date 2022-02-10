import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./headerNav.module.css"

const activeStyles = {
	textDecoration: `underline`,
	color: '#1A1A1A',
	textAlign: 'center'
}

const HeaderNav = () => (

	<div className={styles.headerNav}>
		<Link to="/corporate-workshops" className={styles.linkContainer} activeStyle={activeStyles}>
			Corporate Workshops
		</Link>

		<Link to="/contact-us" className={styles.linkContainer} activeStyle={activeStyles}>
			Contact Us
		</Link>
	</div>

)

export default HeaderNav
