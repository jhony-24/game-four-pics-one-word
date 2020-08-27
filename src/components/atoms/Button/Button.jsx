import React from "react"
import { css } from "aphrodite/no-important"
import PropTypes from "prop-types"
import SButtonPrimary from "src/components/styled/buttons/SButtonPrimary"
import SLabelBlock from "src/components/styled/labels/SLabelBlock"

const Button = ({ onClick, children, styles }) => {
	return (
		<SButtonPrimary className={css(styles)} onClick={onClick}>
			<SLabelBlock>{children}</SLabelBlock>
		</SButtonPrimary>
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
