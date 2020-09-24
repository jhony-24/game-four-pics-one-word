import React from "react"
import Fade from "src/components/animations/Fade"
import VerificationCode from "src/components/molecules/VerificationCode"
import ForgotPasswordGoBackScene from "../../ForgotPasswordPieces/ForgotPasswordGoBackScene"
import ForgotPasswordInput from "../../ForgotPasswordPieces/ForgotPasswordInput"
import ForgotPasswordTitleMessage from "../../ForgotPasswordPieces/ForgotPasswordTitleMessage"

const OptionEmailScene = () => {
	return (
		<Fade>
			<ForgotPasswordGoBackScene />
			<ForgotPasswordTitleMessage
				title="Enter the 4 digits to valid your identity"
				message="To recover your password is important this step. Please enter the code."
			/>
			<VerificationCode checkValue="abcd" />
			<ForgotPasswordInput placeholder="Write your phone number" type="number" />
		</Fade>
	)
}

export default OptionEmailScene
