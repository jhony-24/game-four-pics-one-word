import { css } from "aphrodite/no-important"
import React, { forwardRef, useState } from "react"
import { SInputValidation } from "./ForgotPasswordPieces.style"

const ForgotPasswordInput = forwardRef(({ props, onSendValue, ...restProps }, ref) => {
	const [ isset, setIsset ] = useState(false);
	const onKeyUp = (event) => {
		setIsset(event.current.value.trim() !== "");
	}
	return (
		<SInputValidation.Container>
			<input
				{...restProps}
				ref={ref}
				className={css(SInputValidation.input.default)}
				onKeyUp={onKeyUp}
			/>
			<SInputValidation.ButtonContainer>
				{isset && (
					<SInputValidation.Button onClick={onSendValue}>ENVIAR</SInputValidation.Button>
				)}
			</SInputValidation.ButtonContainer>
		</SInputValidation.Container>
	)
})

export default ForgotPasswordInput
