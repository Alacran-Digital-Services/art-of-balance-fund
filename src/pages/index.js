import * as React from "react"
import "../styles/global.css"
import "../styles/index.css"

import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import HomeHeader from "../components/homeHeader"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CommonButton from "../components/common/commonButton"

import { generateBlogPreviews } from "../utils/blog/blogPreviewsGenerator"
import LeftImageContentBlock from "../components/common/ContentBlocks/leftImageContentBlock"
import RightImageContentBlock from "../components/common/ContentBlocks/rightImageContentBlock"

const IndexPage = () => {

	const gatsbyImageInfo = useStaticQuery(graphql`
		query SectionOnePhoto {
			file ( relativePath:{eq: "smiling.png" } ) {
				childImageSharp {
					gatsbyImageData(
						width: 340
						placeholder: BLURRED
						formats: [AUTO, WEBP, AVIF]
						layout: FIXED
						quality: 100
					)
				}
			}
		}
	`)
	const TOTAL_BLOG_POSTS = 2;
	const blogPreviews = generateBlogPreviews(TOTAL_BLOG_POSTS);
	const contentBlockCopy = {
		sectionOne: {
			title: "Smiling People",
			detail: "Sample text",
			buttonInfo: {
				title: "Learn More",
				slug: "/contact-us",
				isGatsbyLink: true
			},
			imageInfo: {
				alt: 'people smiling',
				gatsbyImageData: gatsbyImageInfo.file.childImageSharp.gatsbyImageData,
			},
		},
		sectionTwo: {
			title: "Smiling People",
			detail: "Sample text",
			buttonInfo: {
				title: "Learn More",
				slug: "/contact-us",
				isGatsbyLink: true
			},
			imageInfo: {
				alt: 'people smiling',
				gatsbyImageData: gatsbyImageInfo.file.childImageSharp.gatsbyImageData,
			},
		},
		sectionThree: {
			title: "Smiling People",
			detail: "Sample text",
			buttonInfo: {
				title: "Learn More",
				slug: "/contact-us",
				isGatsbyLink: true
			},
			imageInfo: {
				alt: 'people smiling',
				gatsbyImageData: gatsbyImageInfo.file.childImageSharp.gatsbyImageData,
			},
		},
		sectionFour: {
			title: "Smiling People",
			detail: "Sample text",
			buttonInfo: {
				title: "Learn More",
				slug: "/contact-us",
				isGatsbyLink: true
			},
			imageInfo: {
				alt: 'people smiling',
				gatsbyImageData: gatsbyImageInfo.file.childImageSharp.gatsbyImageData,
			},
		},
	}

	return (
		<Layout>
			<Seo title="Home" />

			<HomeHeader></HomeHeader>

			{/* section  */}
			<div className="sectionWrapper">

				<LeftImageContentBlock
					contentBlockData={contentBlockCopy.sectionOne}
				></LeftImageContentBlock>

				<RightImageContentBlock
					contentBlockData={contentBlockCopy.sectionTwo}
				></RightImageContentBlock>

				<LeftImageContentBlock
					contentBlockData={contentBlockCopy.sectionThree}
				></LeftImageContentBlock>

				<RightImageContentBlock
					contentBlockData={contentBlockCopy.sectionFour}
				></RightImageContentBlock>


				<div className="section">
					<div className="right">
						<h2>Smiling People</h2>
						<p>
							We are a not-for-profit organization generating grants for mental
							health. We want to decrease stigma and increase awareness of mental
							health needs. We aim to educate corporate offices to increase
							awareness for love, care and affection everywhere you go. We
							advocate for public policies lobbying for mental health care. Our
							mission is to provide accessible mental health for everyone.
						</p>
						<CommonButton buttonTitle="Learn More" />
					</div>
					<div className="left">
						<StaticImage
							src="../images/smiling.png"
							width={500}
						/>
					</div>
				</div>


				<div className="section">
					<div className="left">
						<StaticImage
							src="../images/smiling.png"
							width={500}
						/>
					</div>
					<div className="right">
						<h2>Smiling People</h2>
						<p>
							We are a not-for-profit organization generating grants for mental
							health. We want to decrease stigma and increase awareness of mental
							health needs. We aim to educate corporate offices to increase
							awareness for love, care and affection everywhere you go. We
							advocate for public policies lobbying for mental health care. Our
							mission is to provide accessible mental health for everyone.
						</p>
						<CommonButton buttonTitle="Learn More" />
					</div>
				</div>

			</div>
			{/* end of section */}

			{/* section ii : three items */}
			<div className="sectionii">
				<div>icon 1</div>
				<div>icon 2</div>
				<div>icon 3</div>
			</div>
			<div className="copyContent">
				<h1 className="secondary">Our Mission</h1>
				<p>This is placeholder text. Place your mission here.</p>
			</div>

			<div className="copyContent">
				<h1 className="primary">Our Values</h1>
				<p>This is placeholder text. Place your values here.</p>
			</div>

			<div className="copyContent">
				<h1 className="secondary">Community Engagement</h1>
				<div className="standardSpacing">
					<Seo title="Home" />
					<div> {blogPreviews} </div>
					<CommonButton
						buttonTitle="View all"
						isGatsbyLink={true}
						slug={"/blog"}
					></CommonButton>
				</div>
			</div>
		</Layout>
	)
}
export default IndexPage
