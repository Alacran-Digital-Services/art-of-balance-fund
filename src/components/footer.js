import * as React from "react"
import { footerContainer, purpleText, footerLink } from "./footer.module.css"

const Footer = () => (

    <footer className={footerContainer}>
            <span> Built with <span className={purpleText}>love</span> by <a className={footerLink + ` ` + purpleText} href="https://www.alacrandigitalservices.com/"
                    target="_blank" rel="noreferrer">Alacrán Digital Services</a> © {new Date().getFullYear()}.
            </span>
    </footer>
)

export default Footer
