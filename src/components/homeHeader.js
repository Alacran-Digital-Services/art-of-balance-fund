import React from "react"
import {
	homeBanner,
	bannerDetails,
	subtext,
	subtextTitle,
	subtextDescription
} from "./homeHeader.module.css"
import CommonButton from "./common/commonButton"

const homeHeader = () => {
	return (
		<div className={homeBanner}>
			<div className={bannerDetails}>
				<div className={subtext}>
					<div className={subtextTitle}>
						<h1>Opening the doors to mental health access.</h1>
						<CommonButton commonButtonData={{
							buttonTitle: "Our Vision",
							slug: "/",
							isGatsbyLink: true
						}} />
					</div>
					<div className={subtextDescription}>
						<p>
							We are a not-for-profit organization generating grants for mental
							health. We want to decrease stigma and increase awareness of mental
							health needs. We aim to educate corporate offices to increase
							awareness for love, care and affection everywhere you go. We
							advocate for public policies lobbying for mental health care. Our
							mission is to provide accessible mental health for everyone.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default homeHeader
