import React from 'react'
import PropTypes from 'prop-types'
import { contentBlockText } from './contentBlock.module.css'
import CommonButton from './common/commonButton'

import { GatsbyImage } from 'gatsby-plugin-image'

function ContentBlock(props) {
	const { title, detail, buttonInfo, imageInfo } = props
	return (
		<div>
			{imageInfo.shouldImageFloatRight ? (
				(imageInfo.gatsbyImageData !== null &&
					(<div className="contentBlockImageFloatRight">
						<GatsbyImage image={imageInfo.gatsbyImageData} alt={imageInfo.alt}>
						</GatsbyImage>
					</div>)
				)
			) : (
				<div className="contentBlockImage">
					<GatsbyImage image={imageInfo.gatsbyImageData} alt={imageInfo.alt}>
					</GatsbyImage>
				</div>
			)
			}

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

ContentBlock.propTypes = {
	title: PropTypes.string.isRequired,
	detail: PropTypes.string.isRequired,
	buttonInfo: PropTypes.shape({
		title: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		isGatsbyLink: PropTypes.bool.isRequired
	}),
	imageInfo: PropTypes.shape({
		gatsbyImageData: PropTypes.string.isRequired,
		shouldImageFloatRight: PropTypes.bool.isRequired,
		alt: PropTypes.string.isRequired
	})
}

export default ContentBlock
