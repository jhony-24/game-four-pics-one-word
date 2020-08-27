import React, { memo } from "react"
import Flex from "src/components/dom/Flex"
import { TEXT_SECONDARY } from "src/theme"
import PropTypes from "prop-types"
import SLoading from "./style"

const Loading = ({ color, colortext, text, size }) => {
	return (
		<Flex styles={SLoading.Flex}>
			<SLoading.Loading $color={color} $size={size}/>
			{text && <SLoading.Label $color={colortext}>{text}</SLoading.Label>}
		</Flex>
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
