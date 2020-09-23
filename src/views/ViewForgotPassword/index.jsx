import React from "react"
import ForgotPasswordOptions from "./ForgotPasswordOptions/ForgotPasswordOptions"
import ForgotPasswordOptionsProvider from "./ForgotPasswordOptions/ForgotPasswordOptionsProvider"

const ViewForgotPassword = () => {
	return (
		<div className="forgot-password">
			<ForgotPasswordOptionsProvider>
				<ForgotPasswordOptions/>
			</ForgotPasswordOptionsProvider>
		</div>
	)
}

export default ViewForgotPassword
