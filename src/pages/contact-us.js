import * as React from "react"

import CommonButton from "../components/common/commonButton"
import Layout from "../components/layout";
import Seo from "../components/seo";
import ContactForm from "../components/forms/contactForm";
import "../styles/global.css"

const ContactPage = () => (
    <Layout>
        <div style={{ maxWidth: `920px`, margin: `0 auto`, padding: `1rem 1.5rem` }}>
            <Seo title="Contact Us" />
            <h1>Contact Us</h1>
            <p>
                We are always looking for more opportunities to make a difference.
                Please fill out the form below to have a conversation on how Art of Balance Fund can make an impact in your organization.
            </p>

            <div>
                <h2>Want to set up a discover call?</h2>
                <p>For your convenience, schedule a time to speak with someone from our team using this link.</p>
                <CommonButton commonButtonData={{
                    buttonTitle: "Schedule a Discovery Call",
                    slug: "www.calendly.com",
                    isGatsbyLink: false
                }} ></CommonButton>
            </div>

            <div>
                <h2>Want to communicate via email?</h2>
                <p>Please fill out this short form below and someone from our team will reply to your request.</p>
                <ContactForm></ContactForm>
            </div>

            <p>Thank you for supporting mental wellness and the important work we do.</p>
        </div>
    </Layout>
)

export default ContactPage