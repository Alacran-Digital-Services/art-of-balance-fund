import React from 'react'

import * as styles from "./socialLinks.module.css"
import { IconContext } from "react-icons"

import {
    RiFacebookBoxLine,
    RiTwitterLine,
    RiLinkedinBoxLine,
    RiGithubLine,
    RiMediumLine,
    RiSoundcloudLine,
  } from "react-icons/ri"

const SocialLinks = () => {
    return (
        <div className={styles.socialsContainer}>
            <div className={styles.socials}>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/jmontes530/ " className={styles.linkContainer}>
                    <IconContext.Provider value={{ color: "#4267B2", size: "1.8rem" }}>
                        <span style={{ paddingTop: `.5rem` }}><RiFacebookBoxLine></RiFacebookBoxLine></span>
                    </IconContext.Provider>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jorgealbertoviramontes/" className={styles.linkContainer}>
                    <IconContext.Provider value={{ color: "#2867B2", size: "1.8rem" }}>
                        <span style={{ paddingTop: `.5rem` }}><RiLinkedinBoxLine></RiLinkedinBoxLine></span>
                    </IconContext.Provider>
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/jvmontes" className={styles.linkContainer}>
                    <IconContext.Provider value={{ color: "#1DA1F2", size: "1.8rem" }}>
                        <span style={{ paddingTop: `.5rem` }}><RiTwitterLine></RiTwitterLine></span>
                    </IconContext.Provider>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/jvmontes" className={styles.linkContainer}>
                    <IconContext.Provider value={{ color: "#333", size: "1.8rem" }}>
                        <span style={{ paddingTop: `.5rem` }}><RiGithubLine></RiGithubLine></span>
                    </IconContext.Provider>
                </a>
                <a target="_blank" rel="noreferrer" href="https://jorgeviramontes.medium.com/" className={styles.linkContainer}>
                    <IconContext.Provider value={{ color: "#00ab6c", size: "1.8rem" }}>
                        <span style={{ paddingTop: `.5rem` }}><RiMediumLine></RiMediumLine></span>
                    </IconContext.Provider>
                </a>
                <a target="_blank" rel="noreferrer" href="https://soundcloud.com/jayalbertomusic" className={styles.linkContainer}>
                    <IconContext.Provider value={{ color: "#FF9533", size: "1.8rem" }}>
                        <span style={{ paddingTop: `.5rem` }}><RiSoundcloudLine></RiSoundcloudLine></span>
                    </IconContext.Provider>
                </a>
                
            </div>
        </div>
    )
}

export default SocialLinks
