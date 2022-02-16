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
import ContentBlock from "../components/common/contentBlock/contentBlock"

const IndexPage = () => {

	const homePagePhotos = useStaticQuery(graphql`
		query HomePagePhotos {
			sectionOnePhoto: file ( relativePath:{eq: "girl-with-hope.jpg" } ) {
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
			sectionTwoPhoto: file ( relativePath:{eq: "girl-in-prayer.jpg" } ) {
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
			sectionThreePhoto: file ( relativePath:{eq: "lady-smiling.jpg" } ) {
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
			sectionFourPhoto: file ( relativePath:{eq: "blind-justice.jpg" } ) {
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
			title: "Increase Mental Health Access",
			detail: `
			We fund eligible mental health clinics that offer discounted or sliding scale services.
			We believe that mental health services should be accessible to all. 
			We fund mental health clinics to see more clients by offering sliding scale services. 
			Learn more below.`,
			buttonInfo: {
				buttonTitle: "Learn About Our Sliding Scale Services Program",
				slug: "/contact-us",
				isGatsbyLink: true
			},
			imageInfo: {
				alt: 'A woman looking off into the distance with hope',
				gatsbyImageData: homePagePhotos.sectionOnePhoto.childImageSharp.gatsbyImageData,
			},
			shouldImageDisplayAfterText: false
		},
		sectionTwo: {
			title: "Promote Mental Health Awareness",
			detail: `
			We reduce barriers, stigmas, and disparities associated with mental health.
			You should never feel shame when trying to find help in life. 
			We believe in accepting everyone and anyone and working together towards creating a better world by talking about mental health. 
			`,
			buttonInfo: {
				buttonTitle: "Read More On Our Blog",
				slug: "/blog",
				isGatsbyLink: true
			},
			imageInfo: {
				alt: 'A lady outdoors in prayer',
				gatsbyImageData: homePagePhotos.sectionTwoPhoto.childImageSharp.gatsbyImageData,
			},
			shouldImageDisplayAfterText: true
		},
		sectionThree: {
			title: "Education on Mental Health",
			detail: `
			We impact communities, workplaces, and schools through expert-led workshops.
			We go into our local communities and make a lasting impact around the conversation of mental health that leaves people feeling empowered.
			If you are interested in learning more, please check out our corporate workshops page.
			`,
			buttonInfo: {
				buttonTitle: "Learn More About Our Corporate Partnerships",
				slug: "/corporate-workshops",
				isGatsbyLink: true
			},
			imageInfo: {
				alt: 'A lady smiling',
				gatsbyImageData: homePagePhotos.sectionThreePhoto.childImageSharp.gatsbyImageData,
			},
			shouldImageDisplayAfterText: false
		},
		sectionFour: {
			title: "Mental Health Advocacy",
			detail: `
			We fight for policies and laws promoting mental health access.
			We work with local political leaders to enact change to policies affecting mental health access, equity, and resources.
			Learn more about our latest efforts in our blog.`,
			buttonInfo: {
				buttonTitle: "Read More On Our Blog",
				slug: "/blog",
				isGatsbyLink: true
			},
			imageInfo: {
				alt: 'A picture of a woman with a blindfold holding a scale',
				gatsbyImageData: homePagePhotos.sectionFourPhoto.childImageSharp.gatsbyImageData,
			},
			shouldImageDisplayAfterText: true
		},
	}

	return (
		<Layout>
			<Seo title="Home" />

			<HomeHeader></HomeHeader>

			<div className="sectionWrapper">

				<ContentBlock
					contentBlockData={contentBlockCopy.sectionOne}
				></ContentBlock>

				<ContentBlock
					contentBlockData={contentBlockCopy.sectionTwo}
				></ContentBlock>

				<ContentBlock
					contentBlockData={contentBlockCopy.sectionThree}
				></ContentBlock>

				<ContentBlock
					contentBlockData={contentBlockCopy.sectionFour}
				></ContentBlock>
			</div>

			<div className="copyContent">
				<h1 className="secondary">Our Vision</h1>
				<p>This is placeholder text. Place your mission here.</p>

				<div className="sectionii">
					<div>icon 1</div>
					<div>icon 2</div>
					<div>icon 3</div>
				</div>
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
					<CommonButton commonButtonData={{
						buttonTitle: "View all",
						slug: "/blog",
						isGatsbyLink: true
					}}

					></CommonButton>
				</div>
			</div>
		</Layout>
	)
}
export default IndexPage
