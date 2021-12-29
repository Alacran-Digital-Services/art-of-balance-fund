
import React from 'react'
import CommonButton from "../components/common/commonButton"
import { homeBanner, bannerDetails, title, tagline } from "./homeHeader.module.css"
import { StaticImage } from "gatsby-plugin-image"
import SocialLinks from "../components/socialLinks"

const homeHeader = () => {
    return (
        <div className={homeBanner}>
            <div className={bannerDetails}>
                <div className={title}>
                    Art of Balance Fund
                </div>

                <h4 className={tagline}>
                    Helping make mental health accessible to all.
                </h4>

                <div>
                    <p>
                        We are a not-for-profit organization generating grants for mental health.
                        We want to decrease stigma and increase awareness of mental health needs. 
                        We aim to educate corporate offices to increase awareness for love, care and affection everywhere you go. 
                        We advocate for public policies lobbying for mental health care. 
                        Our mission is to provide accessible mental health for everyone.     
                    </p>

                    <CommonButton buttonTitle="DONATE NOW" slug="https://www.google.com" isGatsbyLink={false}></CommonButton>
                </div>

                <SocialLinks></SocialLinks>
            </div>

            <div>
                <StaticImage
                    src="../images/art-of-balance.png" alt="Art of Balance Logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={340}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    style={{
                        margin: `auto auto 1.45rem`
                    }}
                />
            </div>
        </div>
    )
}

export default homeHeader
