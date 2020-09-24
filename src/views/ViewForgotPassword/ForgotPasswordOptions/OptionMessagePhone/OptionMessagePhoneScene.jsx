import React, { useRef } from "react"
import Fade from "src/components/animations/Fade"
import ForgotPasswordGoBackScene from "../../ForgotPasswordPieces/ForgotPasswordGoBackScene"
import ForgotPasswordInput from "../../ForgotPasswordPieces/ForgotPasswordInput"
import ForgotPasswordTitleMessage from "../../ForgotPasswordPieces/ForgotPasswordTitleMessage"

const OptionMessagePhoneScene = () => {
	return (
		<Fade>
			<ForgotPasswordGoBackScene />
			<ForgotPasswordTitleMessage
				title="Enter your phone number"
				message="To recover your password is important this step. Please enter the code."
			/>
			<ForgotPasswordInput placeholder="Write your phone number" type="number" />
		</Fade>
	)
}

export default OptionMessagePhoneScene
