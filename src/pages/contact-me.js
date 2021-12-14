import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import ContactForm from "../components/forms/contactForm";
import "../styles/global.css"

const ContactPage = () => (
    <Layout>
        <div style={{ maxWidth: `620px`, margin: `0 auto`, padding: `1rem 1.5rem`}}>
            <Seo title="Contact Me" />
            <h1>Contact Me</h1>
            <p>
                Looking to build a website for your business? I'd love to hear from you!
            </p>
            <p>
                Please fill out this short form and I will respond within 2 business days.
            </p>

            <ContactForm></ContactForm>
        </div>
    </Layout>
)

export default ContactPage