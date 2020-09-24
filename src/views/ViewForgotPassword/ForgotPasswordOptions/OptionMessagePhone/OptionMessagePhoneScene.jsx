import React from "react"
import Fade from "src/components/animations/Fade"
import ForgotPasswordGoBackScene from "../../ForgotPasswordPieces/ForgotPasswordGoBackScene"
import ForgotPasswordTitleMessage from "../../ForgotPasswordPieces/ForgotPasswordTitleMessage"

const OptionMessagePhoneScene = () => {
	return (
		<Fade>
			<ForgotPasswordGoBackScene />
			<ForgotPasswordTitleMessage
				title="Enter your phone number"
				message="To recover your password is important this step. Please enter the code."
			/>
		</Fade>
	)
}

export default OptionMessagePhoneScene
