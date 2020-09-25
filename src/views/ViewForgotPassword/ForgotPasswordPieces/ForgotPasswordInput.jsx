import { css } from "aphrodite/no-important"
import { motion } from "framer-motion";
import React, { forwardRef, useState } from "react"
import { SInputValidation } from "./ForgotPasswordPieces.style"

const ForgotPasswordInput = forwardRef(({ props, onSendValue, ...restProps }, ref) => {
	const [ isset, setIsset ] = useState(false);
	const onKeyUp = (event) => {
		setIsset(event.target.value.trim() !== "");
	}
	return (
		<SInputValidation.Container>
			<input
				{...restProps}
				ref={ref}
				className={css(SInputValidation.input.default)}
				onKeyUp={onKeyUp}
			/>
			{
				isset && (
				<motion.div initial={{opacity:0}} animate={{opacity:1}}>
				<SInputValidation.ButtonContainer>
					<SInputValidation.Button onClick={onSendValue}>ENVIAR</SInputValidation.Button>
				</SInputValidation.ButtonContainer>
				</motion.div>
				)
			}
		</SInputValidation.Container>
	)
})

export default ForgotPasswordInput
