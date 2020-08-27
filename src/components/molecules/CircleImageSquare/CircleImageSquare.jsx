import React, { memo } from "react"
import { css } from "aphrodite/no-important"
import PropTypes from "prop-types"
import { SCircleContainer, SCircleAvatarImage } from "./style"

const CircleImageSquare = ({ styles, images, onClick }) => {
	return (
			<SCircleContainer className={css(styles)} onClick={onClick}>
				{images.map((image, i) => (
					<SCircleAvatarImage $image={image} key={i} />
				))}
			</SCircleContainer>
	)
}

CircleImageSquare.defaultProps = {
	onClick: () => null,
}

CircleImageSquare.propTypes = {
	onClick: PropTypes.func,
	images: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default memo(CircleImageSquare)
