import React from "react"
import { SVerificationInput } from "../VerificationCode.style"

const dispersionLimit = 200;
const VerificationCodeInputOneValue = ({ isEnabled, $complete, ...restProps }) => {
	return isEnabled ? (
		<SVerificationInput.WrapperInput
			{...restProps}
			$complete={$complete}
			maxLength="1"
			autoComplete="off"
			animate={$complete && {x:[Math.random()*dispersionLimit,Math.random()*-dispersionLimit,0]}}
		/>
	) : (
		<SVerificationInput.WrapperDisabled />
	)
}
export default VerificationCodeInputOneValue;
