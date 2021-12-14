import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import "../styles/global.css"

const EmailSignupSuccessPage = () => (
    <Layout>
        <div className="standardSpacing">
            <Seo title="Email Signup Success" />
            <h1>Success!</h1>
            <p>
                Thanks! You've successfully signed up to receive email alerts.
            </p>
            <p>
                You'll receive a new email whenever I've posted new stuff on here!
            </p>
            <p>
                I really appreciate your support.
            </p>
            <p>
                Back <Link to="/">Home.</Link>
            </p>
        </div>
    </Layout>
)
export default EmailSignupSuccessPage