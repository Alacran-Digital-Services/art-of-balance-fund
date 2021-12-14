import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import "../styles/global.css"

const SuccessPage = () => (
    <Layout>
        <div className="standardSpacing">
            <Seo title="Success" />
            <h1>Success!</h1>
            <p>
                Thanks! Your message was successfully sent. Please allow 1-2 days for a reply.
            </p>
            <p>
                Back <Link to="/">Home.</Link>
            </p>
        </div>
    </Layout>
)
export default SuccessPage