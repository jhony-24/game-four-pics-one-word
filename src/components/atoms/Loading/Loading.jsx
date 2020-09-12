import React, { memo } from "react"
import { TEXT_SECONDARY } from "src/theme"
import PropTypes from "prop-types"
import { SLoading, SLabel, SFlex } from "./Loading.style"

const Loading = ({ color, colortext, text, size }) => {
	return (
		<SFlex>
			<SLoading $color={color} $size={size}></SLoading>
			{text && <SLabel $color={colortext}>{text}</SLabel>}
		</SFlex>
	)
}

Loading.defaultProps = {
	color: TEXT_SECONDARY,
	colortext: "gray",
	size: "30px",
}

Loading.propTypes = {
	color: PropTypes.string,
	colortext: PropTypes.string,
	text: PropTypes.string,
	size: PropTypes.string,
}

export default memo(Loading)
