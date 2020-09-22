import React from "react"
import { SSocialButton } from "./NetworkSocialButton.style"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import useLanguage from "src/hooks/useInternationalize/useLanguage"

const variantIcons = {
	size: 25,
	style: {
		marginRight: 5,
	},
}

const RedSocialButton = {
	Facebook : ({ ...restProps }) => {
		const { translate } = useLanguage("game.login.");
		return (
			<SSocialButton {...restProps} $background="#4267B2" $color="white">
				<FaFacebook {...variantIcons} color="white" />
				{translate("facebook")}
			</SSocialButton>
		)
	},
	Google : ({ ...restProps }) => {
		const { translate } = useLanguage("game.login.");
		return (
			<SSocialButton {...restProps} $background="white" $style={{boxShadow:"0 2px 10px rgba(0,0,0,.1)"}}>
				<FcGoogle {...variantIcons} />
				{translate("google")}
			</SSocialButton>
		)	
	}	
}


export default RedSocialButton
