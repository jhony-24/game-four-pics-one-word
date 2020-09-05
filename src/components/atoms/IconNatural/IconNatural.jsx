import React from "react"
import style from "./IconNatural.style"
import Flex from "../../dom/Flex"
import PropTypes from "prop-types"
import { STextIconNatural, SIconNatural } from "./IconNatural.style"

const IconNatural = ({ styles, icon, text, coloricon, colortext }) => {
	return (
		<Flex styles={[style.flex, styles]}>
			<SIconNatural $color={coloricon}>{icon}</SIconNatural>
			{text && <STextIconNatural $color={colortext}>{text}</STextIconNatural>}
		</Flex>
	)
}

IconNatural.defaultProps = {
	icon: "",
	text: "",
}

IconNatural.propTypes = {
	icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	coloricon: PropTypes.string,
	colortext: PropTypes.string,
}

export default IconNatural
