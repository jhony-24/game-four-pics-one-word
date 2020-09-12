import React from "react"
import { FormTextLoginSignUp,FormTextLoginSignUpStrong } from "./FormLoginControl.style"

const LoginSignUpText = ({ onClick }) => {
	return (
		<FormTextLoginSignUp>
			no tengo una cuenta
			<FormTextLoginSignUpStrong 
			role="button" tabIndex="0" onClick={onClick} onKeyDown={onClick}> registrarme
			</FormTextLoginSignUpStrong>
		</FormTextLoginSignUp>
	)
}

export default LoginSignUpText
