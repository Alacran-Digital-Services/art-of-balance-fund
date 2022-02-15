import React from 'react'

import { contentBlockText } from './contentBlock.module.css'
import CommonButton from './common/commonButton'

import { GatsbyImage } from 'gatsby-plugin-image'

function ContentBlock({ contentBlockData }) {
	const { title, detail, buttonInfo, imageInfo } = contentBlockData
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

export default ContentBlock
