import React from 'react'
import * as styles from './emailSignup.module.css'

import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import "../../styles/global.css"

const EmailSignup = () => {
    const breakpoints = useBreakpoint();
    return (
        <div className={styles.signupContainer}>
            <div className="standardSpacing">

                <h3 style={{ marginTop: `1.45rem`, lineHeight: `1.6` }}>Join me on my journey.</h3>
                <p>This is just the beginning. Enter your email address to receive updates on new blog posts and creative work.</p>

                <form name="emailSignup" method="post" data-netlify="true" action="/email-signup-success" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="emailSignup" />

                    <div className={styles.emailContainer}>

                        <div className={styles.emailInputContainer}>
                            <input className={styles.emailInputElement} type="email" placeholder="Your email address" name="emailAddress" size={breakpoints.sm ? '20' : '30'} />
                            <button className={styles.sendButton} type="submit">
                                SIGN UP
                            </button>
                        </div>

                        <div className={styles.disclaimerText}>
                            <span>*</span>
                            <span>The email address you provide will never be shared with anyone.</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmailSignup
