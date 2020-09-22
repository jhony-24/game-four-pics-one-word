import React from "react"
import Avatar from "src/components/atoms/Avatar"
import Position from "src/components/styled/wrappers/Position"
import HeaderSettingsUsername from "./HeaderSettingsUsername"
import { css, StyleSheet } from "aphrodite/no-important"
import HeaderSettingsAvatarChange from "./HeaderSettingsAvatarChange"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import SWrapperContainer from "src/components/styled/wrappers/SWrapperContainer"

const style = new StyleSheet.create({
	marginAvatar: {
		margin: "2em 0 10px",
		position: "relative",
	},
})

const HeaderSettings = ({ avatar, title, details }) => {
	return (
		<SWrapperContainer>
			<SWrapperFlex className={css(style.marginAvatar)}>
				<Avatar src={avatar} size="120px" />
				<Position.Absolute>
					<HeaderSettingsAvatarChange />
				</Position.Absolute>
			</SWrapperFlex>
			<HeaderSettingsUsername title={title} details={details} />
		</SWrapperContainer>
	)
}

export default HeaderSettings
