import React, { memo } from "react"
import Fade from "src/components/animations/Fade"
import SLabelBlock from "src/components/styled/labels/SLabelBlock"
import SLabelWrapper from "src/components/styled/labels/SLabelWrapper"

const LoginLabel = ({ text }) => {
	return (
		<SLabelBlock $style={{marginBottom:"10px"}}>
			<Fade>
				<SLabelWrapper $color="color_smooth_darker">{text}</SLabelWrapper>
			</Fade>
		</SLabelBlock>
	)
}

export default memo(LoginLabel)
