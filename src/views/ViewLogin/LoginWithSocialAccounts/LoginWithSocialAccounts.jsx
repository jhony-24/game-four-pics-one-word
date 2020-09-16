import React from "react"
import RedSocialButton from "src/components/molecules/RedSocialButton/RedSocialButton"
import useAuthenticationWithSocial from "src/hooks/useAuthManager/useAuthenticationWithSocial"
import { SFlexSocialContainer, SLabelSocialTitle, } from "./LoginWithSocialAccounts.style"

const LoginWithSocialAccounts = () => {
	const { loginWithGoogle, loginWithFacebook } = useAuthenticationWithSocial();
	return (
		<SFlexSocialContainer>
			<RedSocialButton.Google onClick={loginWithGoogle}></RedSocialButton.Google>
			<RedSocialButton.Facebook onClick={loginWithFacebook}></RedSocialButton.Facebook>
			<SLabelSocialTitle>OR</SLabelSocialTitle>
		</SFlexSocialContainer>
	)
}

export default LoginWithSocialAccounts
