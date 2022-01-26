import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import "../styles/global.css"

const DonationSuccessPage = () => (
    <Layout>
        <div className="standardSpacing">
            <Seo title="Success" />
            <h1>Thank You</h1>
            <p>
                Thanks! Your donation was successfully processed. We appreciate you supporting our efforts to advocate and support mental health.
            </p>
            <p>
                Back <Link to="/">Home.</Link>
            </p>
        </div>
    </Layout>
)
export default DonationSuccessPage