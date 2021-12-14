import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./headerNav.module.css"

import { IconContext } from "react-icons"

import { FiBook, FiUser, FiMail } from 'react-icons/fi'

const activeStyles = {
    textDecoration: `underline`,
    color: '#1A1A1A',
    textAlign: 'center'
}

const HeaderNav = () => (

    <div className={styles.headerNav}>

        <Link to="/blog" className={styles.linkContainer} activeStyle={activeStyles}>
            <IconContext.Provider value={{ color: "#083f45", size: "1.5rem" }}>
                <span><FiBook></FiBook></span>
            </IconContext.Provider>
            BLOG
        </Link>

        <Link to="/about" className={styles.linkContainer} activeStyle={activeStyles}>
            <IconContext.Provider value={{ color: "#083f45", size: "1.5rem" }}>
                <span><FiUser></FiUser></span>
            </IconContext.Provider>
            ABOUT
        </Link>

        <Link to="/contact-me" className={styles.linkContainer} activeStyle={activeStyles}>
            <IconContext.Provider value={{ color: "#083f45", size: "1.5rem" }}>
                <span><FiMail></FiMail></span>
            </IconContext.Provider>
            CONTACT
        </Link>

        {/* 

        <Link to="/" className={styles.linkContainer} activeStyle={activeStyles}>
            <IconContext.Provider value={{ color: "#1A1A1A", size: "1.5rem" }}>
                <span><FiHome></FiHome></span>
            </IconContext.Provider>
            Home
        </Link>

        

        GALLERY & SHOP ARE FUTURE FEATURES.
        
        <Link to="/contact-me" className={styles.linkContainer} activeStyle={activeStyles}>
            <IconContext.Provider value={{ color: "#1A1A1A", size: "1.5rem" }}>
                <span><FiMail></FiMail></span>
            </IconContext.Provider>
            Contact
        </Link>

        <Link to="/gallery" className={styles.linkContainer} activeStyle={activeStyles}>
            <IconContext.Provider value={{ color: "#1A1A1A", size: "1.5rem" }}>
                <span><FiCamera></FiCamera></span>
            </IconContext.Provider>
            Gallery
        </Link>

        <Link to="/shop" className={styles.linkContainer} activeStyle={activeStyles}>
            <IconContext.Provider value={{ color: "#1A1A1A", size: "1.5rem" }}>
                <span><FiShoppingBag></FiShoppingBag></span>
            </IconContext.Provider>
            Shop
        </Link>
        
        */}
    </div>

)

export default HeaderNav
