import React from 'react'
import PropTypes from 'prop-types'
import {
	contentBlockContainer,
	contentBlockText,
	contentBlockImage
} from './contentBlock.module.css'
import CommonButton from '../commonButton'

import { GatsbyImage } from 'gatsby-plugin-image'

function LeftImageContentBlock({ contentBlockData }) {
	const { title, detail, buttonInfo, imageInfo } = contentBlockData
	return (
		<div className={contentBlockContainer}>
			<div className={contentBlockImage}>
				<GatsbyImage image={imageInfo.gatsbyImageData} alt={imageInfo.alt}>
				</GatsbyImage>
			</div>
			<div className={contentBlockText}>
				<h2>{title}</h2>
				<p>{detail}</p>
				{buttonInfo && (
					<CommonButton
						buttonTitle={buttonInfo.title}
						slug={buttonInfo.slug}
						isGatsbyLink={buttonInfo.isGatsbyLink}
					></CommonButton>
				)}
			</div>
		</div>
	)
}

LeftImageContentBlock.propTypes = {
	contentBlockData: PropTypes.shape({
		title: PropTypes.string.isRequired,
		detail: PropTypes.string.isRequired,
		buttonInfo: PropTypes.shape({
			title: PropTypes.string.isRequired,
			slug: PropTypes.string.isRequired,
			isGatsbyLink: PropTypes.bool.isRequired
		}),
		imageInfo: PropTypes.shape({
			gatsbyImageData: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired
		})
	})
}

export default LeftImageContentBlock
