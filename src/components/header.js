import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.css"
import { StaticImage } from "gatsby-plugin-image"


import HeaderNav from "./headerNav"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <Link to="/">
      <StaticImage
        src="../images/jv.png" width={80} quality={95}
        formats={["AUTO", "WEBP", "AVIF"]} alt="JV Logo"
      />
    </Link>
    <HeaderNav></HeaderNav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
