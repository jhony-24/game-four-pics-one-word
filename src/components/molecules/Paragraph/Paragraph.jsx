import React, { memo } from "react"
import { css } from "aphrodite/no-important";
import { SContainerDetail,SContainerTitle, SContainerParagraph } from "./Paragraph.style"
import PropTypes from "prop-types"

const Paragraph = ({ styles, title, detail, colortitle, colordetail }) => {
	const _Title = <SContainerTitle $color={colortitle}>{title}</SContainerTitle>;
	const _Detail = <SContainerDetail $color={colordetail}>{detail}</SContainerDetail>;

	return (
		<SContainerParagraph  className={css(styles)}>
			{title && _Title}
			{detail && _Detail}
		</SContainerParagraph>
	)
}

Paragraph.propTypes = {
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	detail: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	colortitle: PropTypes.string,
	colordetail: PropTypes.string,
}

export default memo(Paragraph)
