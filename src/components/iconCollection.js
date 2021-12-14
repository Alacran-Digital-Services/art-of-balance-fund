import * as React from "react"
import * as styles from "./iconCollection.module.scss"
import { SiJavascript, SiHtml5, SiCsswizardry, SiReact, SiGatsby, SiNetlify, SiGithub, SiGoogle } from 'react-icons/si'

import { IconContext } from "react-icons"

const IconCollection = () => (
    <div className={styles.container}>
        <div className={styles.slider}>
            <div className={styles.sliderTrack}>
                <a className={styles.linkContainer} href="https://html.com/">
                    HTML5
                    <IconContext.Provider value={{ color: "#F16529", size: "3rem" }}>
                        <span><SiHtml5></SiHtml5></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                    CSS
                    <IconContext.Provider value={{ color: "#264de4", size: "3rem" }}>
                        <span><SiCsswizardry></SiCsswizardry></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://www.javascript.com/">
                    JavaScript
                    <IconContext.Provider value={{ color: "#F0DB4F", size: "3rem" }}>
                        <span><SiJavascript></SiJavascript></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://reactjs.org/">
                    React
                    <IconContext.Provider value={{ color: "#61DBFB", size: "3rem" }}>
                        <span><SiReact></SiReact></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://www.gatsbyjs.com/">
                    Gatsby
                    <IconContext.Provider value={{ color: "#663399", size: "3rem" }}>
                        <span><SiGatsby></SiGatsby></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://www.netlify.com/">
                    Netlify
                    <IconContext.Provider value={{ color: "#00AD9F", size: "3rem" }}>
                        <span><SiNetlify></SiNetlify></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://github.com/">
                    Github
                    <IconContext.Provider value={{ color: "#4078c0", size: "3rem" }}>
                        <span><SiGithub></SiGithub></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://domains.google/">
                    Google Domains
                    <IconContext.Provider value={{ color: "#ea4335", size: "3rem" }}>
                        <span><SiGoogle></SiGoogle></span>
                    </IconContext.Provider>
                </a>
                <a className={styles.linkContainer} href="https://html.com/">
                    HTML5
                    <IconContext.Provider value={{ color: "#F16529", size: "3rem" }}>
                        <span><SiHtml5></SiHtml5></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                    CSS
                    <IconContext.Provider value={{ color: "#264de4", size: "3rem" }}>
                        <span><SiCsswizardry></SiCsswizardry></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://www.javascript.com/">
                    JavaScript
                    <IconContext.Provider value={{ color: "#F0DB4F", size: "3rem" }}>
                        <span><SiJavascript></SiJavascript></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://reactjs.org/">
                    React
                    <IconContext.Provider value={{ color: "#61DBFB", size: "3rem" }}>
                        <span><SiReact></SiReact></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://www.gatsbyjs.com/">
                    Gatsby
                    <IconContext.Provider value={{ color: "#663399", size: "3rem" }}>
                        <span><SiGatsby></SiGatsby></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://www.netlify.com/">
                    Netlify
                    <IconContext.Provider value={{ color: "#00AD9F", size: "3rem" }}>
                        <span><SiNetlify></SiNetlify></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://github.com/">
                    Github
                    <IconContext.Provider value={{ color: "#4078c0", size: "3rem" }}>
                        <span><SiGithub></SiGithub></span>
                    </IconContext.Provider>
                </a>

                <a className={styles.linkContainer} href="https://domains.google/">
                    Google Domains
                    <IconContext.Provider value={{ color: "#ea4335", size: "3rem" }}>
                        <span><SiGoogle></SiGoogle></span>
                    </IconContext.Provider>
                </a>
            </div>
        </div>
    </div>
)

export default IconCollection