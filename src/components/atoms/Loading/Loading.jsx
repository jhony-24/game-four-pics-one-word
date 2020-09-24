import React, { memo } from "react"
import PropTypes from "prop-types"
import { SLoading, SLabel, SFlex } from "./Loading.style"
import Position from "src/components/styled/wrappers/Position"

const Loading = ({ text, fullScreen }) => {
	const contentLoading = (
		<SFlex>
			<SLoading />
			<SLabel $color="red">{text}</SLabel>
		</SFlex>
	)
	return fullScreen ? <Position.Full>{contentLoading}</Position.Full> : contentLoading;
}

Loading.propTypes = {
	text: PropTypes.string,
	fullScreen: PropTypes.bool,
}

export default memo(Loading)
