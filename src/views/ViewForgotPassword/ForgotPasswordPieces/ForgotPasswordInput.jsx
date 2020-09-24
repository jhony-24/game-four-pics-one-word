import { css } from "aphrodite/no-important"
import React, { forwardRef } from "react"
import { SInputValidation } from "./ForgotPasswordPieces.style"

const ForgotPasswordInput = forwardRef(({ props, ...restProps }, ref) => {
	return (
		<SInputValidation.Container>
			<input
				{...restProps}
				ref={ref}
				className={css(SInputValidation.input.default)}
			/>
			<SInputValidation.ButtonContainer>
				<SInputValidation.Button>ENVIAR</SInputValidation.Button>
			</SInputValidation.ButtonContainer>
		</SInputValidation.Container>
	)
})

export default ForgotPasswordInput
