import React from "react"
import { SSocialButton } from "./NetworkSocialButton.style"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"

const variantIcons = {
	size: 25,
	style: {
		marginRight: 5,
	},
}

const RedSocialButton = {}

RedSocialButton.Facebook = ({ ...restProps }) => {
	return (
		<SSocialButton {...restProps} $background="#4267B2" $color="white">
			<FaFacebook {...variantIcons} color="white" />
			Continue with Facebok
		</SSocialButton>
	)
}

RedSocialButton.Google = ({ ...restProps }) => {
	return (
		<SSocialButton {...restProps} $background="white" $style={{boxShadow:"0 2px 10px rgba(0,0,0,.1)"}}>
			<FcGoogle {...variantIcons} />
			Continue with Google
		</SSocialButton>
	)
}

export default RedSocialButton
