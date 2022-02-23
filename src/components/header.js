import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.css"
import { StaticImage } from "gatsby-plugin-image"


import HeaderNav from "./headerNav"

import {
	homeBanner,
	bannerDetails,
	title,
	tagline,
} from "./homeHeader.module.css"

const Header = ({ siteTitle }) => (
	<header className={headerStyles.header}>
		<div className={headerStyles.headerLinksWrapper}>
			<div className={headerStyles.headerLinks}>
				<Link to="/">
					<StaticImage
						src="../images/art-of-balance.png" width={80} quality={95}
						formats={["AUTO", "WEBP", "AVIF"]} alt="Art of Balance Logo"
					/>
				</Link>
				<HeaderNav></HeaderNav>
			</div>
		</div>
		<div className={headerStyles.contentWrapper}>
			<div className={headerStyles.content}>
				<h1 className={title}> Art of Balance Fund </h1>
			</div>
		</div>



	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
