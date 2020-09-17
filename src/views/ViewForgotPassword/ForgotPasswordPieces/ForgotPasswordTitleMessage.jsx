import React from "react"
import PropTypes from "prop-types"
import { STitleMessage } from "./ForgotPasswordPieces.style"

const ForgotPasswordTitleMessage = ({ title, message, $dir }) => {
	return (
		<STitleMessage.Container $dir={$dir}>
			<STitleMessage.Title>{title}</STitleMessage.Title>
			<STitleMessage.Message>{message}</STitleMessage.Message>
		</STitleMessage.Container>
	)
}

ForgotPasswordTitleMessage.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	$dir: PropTypes.string,
}

export default ForgotPasswordTitleMessage
