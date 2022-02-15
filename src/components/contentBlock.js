import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import CommonButton from './common/commonButton'

function ContentBlock(imageSource, titleText, detailText, buttonInfo, shouldImageFloatRight) {
    return (
        <div>
            {shouldImageFloatRight ? (
                <div className="contentBlockImageFloatRight">
                    <StaticImage
                        src={imageSource}
                        width={500}
                    ></StaticImage>
                </div>
            ) : (
                <div className="contentBlockImage">
                    <StaticImage
                        src={imageSource}
                        width={500}
                    ></StaticImage>
                </div>
            )}

            <div className="contentBlockText">
                <h2>{titleText}</h2>
                <p>{detailText}</p>
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
