import React from "react"
import { css } from "aphrodite/no-important"
import PropTypes from "prop-types"
import SButton from "./Button.style"

const Button = ({ onClick, children, styles }) => {
	return (
		<SButton.Button className={css(styles)} onClick={onClick}>
			<SButton.ButtonLabel>{children}</SButton.ButtonLabel>
		</SButton.Button>
	)
}

Button.defaultProps = {
	onClick: () => null,
}

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
}

export default Button
