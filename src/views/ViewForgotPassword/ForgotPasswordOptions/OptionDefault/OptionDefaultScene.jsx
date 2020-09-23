import React from 'react'
import SWrapperContainer from "src/components/styled/wrappers/SWrapperContainer"
import ForgotPasswordCardOption from "../ForgotPasswordPieces/ForgotPasswordCardOption"
import ForgotPasswordTitleMessage from "../ForgotPasswordPieces/ForgotPasswordTitleMessage"
import { BsPhone, BsEnvelope } from 'react-icons/bs';

const OptionDefaultScene = () => {
	return (
		<SWrapperContainer>
			<ForgotPasswordTitleMessage
				title="Forgot password"
				message="Select wich contact detail should we use to reset your password"
			/>
			<ForgotPasswordCardOption
				icon={BsPhone}
				options={{ title: "Via sms:", detail: "*****0556" }}
			/>
			<ForgotPasswordCardOption
				icon={BsEnvelope}
				options={{ title: "Via email:", detail: "*****el@gmail.com" }}
			/>
		</SWrapperContainer>
	)
}

export default OptionDefaultScene
