import React from 'react'
import PropTypes from 'prop-types'
import {
	contentBlockContainer,
	contentBlockText,
	contentBlockImage
} from './contentBlock.module.scss'
import CommonButton from '../commonButton'

import { GatsbyImage } from 'gatsby-plugin-image'

function ContentBlock({ contentBlockData }) {
	const { title, detail, buttonInfo, imageInfo, shouldImageDisplayAfterText } = contentBlockData
	return (
		<div className={contentBlockContainer}>
			{shouldImageDisplayAfterText === false && (
				<div className={contentBlockImage}>
					<GatsbyImage image={imageInfo.gatsbyImageData} alt={imageInfo.alt}>
					</GatsbyImage>
				</div>
			)}

			<div className={contentBlockText}>
				<h2>{title}</h2>
				<p>{detail}</p>
				{buttonInfo && (
					<CommonButton
						commonButtonData={buttonInfo}
					></CommonButton>
				)}
			</div>

			{shouldImageDisplayAfterText === true && (
				<div className={contentBlockImage}>
					<GatsbyImage image={imageInfo.gatsbyImageData} alt={imageInfo.alt} >
					</GatsbyImage>
				</div>
			)}

		</div>
	)
}

ContentBlock.propTypes = {
	contentBlockData: PropTypes.shape({
		title: PropTypes.string.isRequired,
		detail: PropTypes.string.isRequired,
		buttonInfo: PropTypes.shape({
			buttonTitle: PropTypes.string.isRequired,
			slug: PropTypes.string.isRequired,
			isGatsbyLink: PropTypes.bool.isRequired
		}),
		imageInfo: PropTypes.shape({
			gatsbyImageData: PropTypes.object.isRequired,
			alt: PropTypes.string.isRequired
		}),
		shouldImageDisplayAfterText: PropTypes.bool.isRequired
	})
}

export default ContentBlock
