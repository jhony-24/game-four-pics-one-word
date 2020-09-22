import React from "react"
import useLanguage from "src/hooks/useInternationalize/useLanguage"
import { FormTextLoginSignUp,FormTextLoginSignUpStrong } from "./FormLoginControl.style"

const LoginSignUpText = ({ onClick }) => {
	const { translate } = useLanguage("game.login.");
	return (
		<FormTextLoginSignUp>
			{translate("message-sign-up")} 
			<FormTextLoginSignUpStrong role="button" tabIndex="0" onClick={onClick} onKeyDown={onClick}> 
				{" "}{translate("sign-up")}
			</FormTextLoginSignUpStrong>
		</FormTextLoginSignUp>
	)
}

export default LoginSignUpText
