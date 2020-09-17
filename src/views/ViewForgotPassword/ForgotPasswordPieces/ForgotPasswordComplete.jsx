import React from "react"
import { AiFillCheckCircle } from "react-icons/ai"
import SLabelWrapper from "src/components/styled/labels/SLabelWrapper"
import SWrapperCentered from "src/components/styled/wrappers/SWrapperCentered"
import ForgotPasswordTitleMessage from "./ForgotPasswordTitleMessage"

const ForgotPasswordComplete = () => {
	return (
		<SWrapperCentered>
			<SLabelWrapper $style={{ marginBottom: "20px" }}>
				<AiFillCheckCircle size={50} />
			</SLabelWrapper>
			<ForgotPasswordTitleMessage title="" message="" $dir="center" />
		</SWrapperCentered>
	)
}

export default ForgotPasswordComplete
