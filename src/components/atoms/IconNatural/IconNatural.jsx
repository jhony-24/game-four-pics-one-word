import React from "react"
import { SFlex } from "./IconNatural.style"
import PropTypes from "prop-types"
import { STextIconNatural, SIconNatural } from "./IconNatural.style"

const IconNatural = ({ icon, text, coloricon, colortext }) => {
	return (
		<SFlex>
			<SIconNatural $color={coloricon}>{icon}</SIconNatural>
			{text && <STextIconNatural $color={colortext}>{text}</STextIconNatural>}
		</SFlex>
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
