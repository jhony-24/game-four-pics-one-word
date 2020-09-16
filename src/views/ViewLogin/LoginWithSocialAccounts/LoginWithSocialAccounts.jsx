import React from "react"
import RedSocialButton from "src/components/molecules/RedSocialButton/RedSocialButton"
import { SFlexSocialContainer, SLabelSocialTitle, } from "./LoginWithSocialAccounts.style"

const LoginWithSocialAccounts = () => {
	return (
		<SFlexSocialContainer>
			<RedSocialButton.Google></RedSocialButton.Google>
			<RedSocialButton.Facebook></RedSocialButton.Facebook>
			<SLabelSocialTitle>OR</SLabelSocialTitle>
		</SFlexSocialContainer>
	)
}

export default LoginWithSocialAccounts
