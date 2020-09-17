import React from "react"
import { SForgotPasswordCardText, SForgotPasswordCard } from "./ForgotPasswordPieces.style"

const ForgotPasswordCardOption = ({ icon: Icon, options, onClick }) => {
	return (
		<SForgotPasswordCard.Container $style={{padding:"2em 1em",width:"90%"}} onClick={onClick}>
			<SForgotPasswordCard.Item $style={{marginRight:"40px"}}>
				<Icon size={30} />
			</SForgotPasswordCard.Item>
			<SForgotPasswordCard.Item $dir="column" $align="flex-start">
				<SForgotPasswordCardText.Title>{options.title}</SForgotPasswordCardText.Title>
				<SForgotPasswordCardText.Message>{options.detail}</SForgotPasswordCardText.Message>
			</SForgotPasswordCard.Item>
		</SForgotPasswordCard.Container>
	)
}

export default ForgotPasswordCardOption
