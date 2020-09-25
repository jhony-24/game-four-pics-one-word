import React from "react"
import { useState } from "react"
import VerificationCode from "src/components/molecules/VerificationCode"
import SWrapperCentered from "src/components/styled/wrappers/SWrapperCentered"
import useCodeVerificationPassword from "src/hooks/useResetPassword/useCodeVerificationPassword"
import useGenerateCodeToPassword from "src/hooks/useResetPassword/useGenerateCodeToPassword"
import useResetPassword from "src/hooks/useResetPassword/useResetPassword"
import ForgotPasswordInput from "../../ForgotPasswordPieces/ForgotPasswordInput"
import { SInputValidation } from "../../ForgotPasswordPieces/ForgotPasswordPieces.style"

const EmailWriteCodeVerify = () => {
	const { createCodeVerification } = useGenerateCodeToPassword()
	const { resetPassword } = useResetPassword();
	const { isCreated } = useCodeVerificationPassword()
	const [ isCompleteCode, setCompleteCode ] = useState(false);

	if(isCreated){
		return(
		<SWrapperCentered>
			{isCompleteCode ? (
				<SInputValidation.Button onClick={resetPassword}>Obtener mi contraseña</SInputValidation.Button>
				) : (
				<VerificationCode checkValue="abcd" onCompleteSuccess={(e)=>setCompleteCode(e.isComplete)} /> 
			)}
		</SWrapperCentered>
		)
	}
	return <ForgotPasswordInput placeholder="Type your email" type="email" onSendValue={createCodeVerification} />

}

export default EmailWriteCodeVerify
