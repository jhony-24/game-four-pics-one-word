import React, { memo } from "react"
import style, { SParagraphTitle, SParagraphDetail } from "./style"
import Flex from "src/components/dom/Flex"
import PropTypes from "prop-types"

const Paragraph = ({ styles, title, detail, colortitle, colordetail }) => {
	const _Title = <SParagraphTitle $color={colortitle}>{title}</SParagraphTitle>;
	const _Detail = <SParagraphDetail $color={colordetail}>{detail}</SParagraphDetail>;

	return (
		<Flex styles={[style.flex, styles]}>
			{title && _Title}
			{detail && _Detail}
		</Flex>
	)
}

Paragraph.propTypes = {
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	detail: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	colortitle: PropTypes.string,
	colordetail: PropTypes.string,
}

export default memo(Paragraph)
