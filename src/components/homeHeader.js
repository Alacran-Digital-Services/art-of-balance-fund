
import React from 'react'
import * as styles from "./homeHeader.module.css"
import { StaticImage } from "gatsby-plugin-image"
import SocialLinks from "../components/socialLinks"
import CommonButton from "../components/common/commonButton"

const homeHeader = () => {
    return (
        <div className={styles.homeBanner}>
            <div className={styles.bannerDetails}>
                <div className={styles.title}>
                    Jorge Viramontes
                </div>

                <h4 className={styles.tagline}>
                    Entrepreneur, Engineer, and Empath
                </h4>

                <div>
                    <p>
                        Jorge brings over seven years of Fortune 500 consulting experience to the digital entrepreneurship realm from Chicago, IL.
                    </p>

                    <p>
                        He's the owner of Alacrán Digital Services, a digital media company focused on growing small businesses via personal relationships and coaching.
                    </p>

                    <p>
                        When he's not coding or creating content, he loves traveling, meeting new people, and listening to all kinds of music.
                    </p>

                    <CommonButton buttonTitle="VIEW RESUME" slug="https://drive.google.com/file/d/1uirgA5NGFs7y6t-9TP2e1WvkQkfufLXm/view?usp=sharing" isGatsbyLink={false}></CommonButton>
                </div>

                <SocialLinks></SocialLinks>
            </div>

            <div>
                <StaticImage
                    src="../images/jorge-looking-away.jpg" alt="Headshot of Jorge"
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
