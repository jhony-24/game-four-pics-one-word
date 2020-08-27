import React from "react"
import PropTypes from "prop-types"
import SAvatar from "./Avatar.style"

const Avatar = ({ color, src, size, icon }) => {
	return (
		<SAvatar.Avatar $size={size} $color={color}>
			{src && <SAvatar.Avatar $as="img" src={src} alt={src} $size={size} />}
			{icon && icon}
		</SAvatar.Avatar>
	)
}

Avatar.defaultProps = {
	size: "45px",
	color: "rgb(230,230,230)",
	icon: null,
	src: null,
}

Avatar.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
	icon: PropTypes.element,
	src: PropTypes.string,
}

export default Avatar
