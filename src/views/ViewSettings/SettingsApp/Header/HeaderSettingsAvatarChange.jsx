import React, { useState } from "react"
import { IoIosCamera } from "react-icons/io"
import { motion as HoverAvatar } from "framer-motion"
import Avatar from "src/components/atoms/Avatar"

const HeaderSettingsAvatarChange = () => {
	const [hover, setHover] = useState(false)
	const defineSetHover = value => () => {
		setHover(value)
	}

	return (
		<HoverAvatar.span
			initial={{ opacity: 0 }}
			animate={{ opacity: hover ? 1 : 0 }}
			onMouseOver={defineSetHover(true)}
			onMouseLeave={defineSetHover(false)}
		>
			<Avatar
				icon={
					hover ? (
						<IoIosCamera color="white" size={40} onClick={() => console.log("ok")} />
					) : null
				}
				color="rgba(0,0,0,.3)"
				size="120px"
			/>
		</HoverAvatar.span>
	)
}

export default HeaderSettingsAvatarChange
