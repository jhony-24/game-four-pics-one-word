import React from "react"
import SWrapperContainer from "src/components/styled/wrappers/SWrapperContainer"
import ForgotPasswordCardOption from "../ForgotPasswordPieces/ForgotPasswordCardOption"
import ForgotPasswordTitleMessage from "../ForgotPasswordPieces/ForgotPasswordTitleMessage"
import { BsPhone, BsEnvelope } from "react-icons/bs"
import Fade from "src/components/animations/Fade"
import { useForgotPasswordOptionsContext,forgotPasswordScenes } from "../ForgotPasswordOptionsProvider"

const OptionDefaultScene = () => {
	const { setScene } = useForgotPasswordOptionsContext();
	return (
		<Fade type="in">
			<SWrapperContainer>
				<ForgotPasswordTitleMessage
					title="Forgot password"
					message="Select wich contact detail should we use to reset your password"
				/>
				<ForgotPasswordCardOption
					icon={BsPhone}
					options={{ title: "Via sms:", detail: "*****0556" }}
					onClick={()=>setScene(options.sms)}
				/>
				<ForgotPasswordCardOption
					icon={BsEnvelope}
					options={{ title: "Via email:", detail: "*****el@gmail.com" }}
					onClick={()=>setScene(options.email)}
				/>
			</SWrapperContainer>
		</Fade>
	)
}

export default OptionDefaultScene
