import React from "react"
import Fade from "src/components/animations/Fade"
import ForgotPasswordGoBackScene from "../../ForgotPasswordPieces/ForgotPasswordGoBackScene"
import ForgotPasswordTitleMessage from "../../ForgotPasswordPieces/ForgotPasswordTitleMessage"
import EmailWriteCodeVerify from "./EmailWriteCodeVerify"

const OptionEmailScene = () => {
	return (
		<Fade>
			<ForgotPasswordGoBackScene />
			<ForgotPasswordTitleMessage
				title="Enter the 4 digits to valid your identity"
				message="To recover your password is important this step. Please enter the code."
			/>
			<EmailWriteCodeVerify/>
		</Fade>
	)
}

export default OptionEmailScene
