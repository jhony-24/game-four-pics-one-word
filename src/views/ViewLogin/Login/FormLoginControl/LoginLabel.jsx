import React, { memo } from "react"
import Fade from "src/components/animations/Fade"
import SLabelWrapper from "src/components/styled/labels/SLabelWrapper"

const LoginLabel = ({ text }) => {
	return (
		<Fade>
			<SLabelWrapper $color="color_smooth_darker">{text}</SLabelWrapper>
		</Fade>
	)
}

export default memo(LoginLabel)
