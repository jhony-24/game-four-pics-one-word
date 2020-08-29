import React from "react"
import { css } from "aphrodite/no-important"
import PropTypes from "prop-types"
import SLabelWrapper from "src/components/styled/labels/SLabelWrapper"

const Text = ({ children, styles, color }) => {
	return (
		<SLabelWrapper $color={color} className={css(styles)}>
			{children}
		</SLabelWrapper>
	)
}

Text.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
}

export default Text
