import React from 'react'

import * as styles from "./socialLinks.module.css"
import { IconContext } from "react-icons"

import {
    RiFacebookBoxLine,
    RiLinkedinBoxLine,
  } from "react-icons/ri"

const SocialLinks = () => {
    return (
        <div className={styles.socialsContainer}>
            <div className={styles.socials}>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/ " className={styles.linkContainer}>
                    <IconContext.Provider value={{ color: "#4267B2", size: "1.8rem" }}>
                        <span style={{ paddingTop: `.5rem` }}><RiFacebookBoxLine></RiFacebookBoxLine></span>
                    </IconContext.Provider>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className={styles.linkContainer}>
                    <IconContext.Provider value={{ color: "#2867B2", size: "1.8rem" }}>
                        <span style={{ paddingTop: `.5rem` }}><RiLinkedinBoxLine></RiLinkedinBoxLine></span>
                    </IconContext.Provider>
                </a>
                
            </div>
        </div>
    )
}

export default SocialLinks
