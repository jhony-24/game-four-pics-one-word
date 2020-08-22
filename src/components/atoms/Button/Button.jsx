import React from "react"
import { css } from "aphrodite/no-important"
import style from "./style"
import PropTypes from "prop-types"

const Button = ({ onClick, children, styles }) => {
	return (
		<button className={css(style.btn, styles)} onClick={onClick}>
			<span className={css(style.dContent)}>{children}</span>
		</button>
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
