import * as React from "react"

import CommonButton from "../components/common/commonButton"
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/global.css"


const AboutPage = () => (
    <Layout>
        <div className="standardSpacing">
            <Seo title="Corporate Workshops" />
            <h1>Corporate Workshops</h1>
            <h2>
                Train your employees to access the tools within themselves
            </h2>

            <p>
                [PLACEHOLDER TEXT] Art of Balance Fund provides opportunities for corporations to create unique and valuable experiences for their employees around their mental health.
                We provide an intensive, deep dive into what we need to feel better about things going on in life. 
                Through our customized approach, we provide valuable insights to your employees to become better performers on the job by working through their internal mindset, which drives everything they do.
            </p>

            <CommonButton buttonTitle={"Schedule a Discovery Call"} slug={"www.google.com"} isGatsbyLink={false}></CommonButton>
        </div>
    </Layout>
)

export default AboutPage