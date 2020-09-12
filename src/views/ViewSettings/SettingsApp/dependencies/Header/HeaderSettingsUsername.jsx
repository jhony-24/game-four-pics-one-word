import React, { memo } from "react"
import Text from "src/components/atoms/Text"
import { StyleSheet, css } from "aphrodite/no-important"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"

const style = new StyleSheet.create({
	flex: {
		flexDirection: "column",
	},
	username: {
		fontSize: "1.5em",
		fontWeight: "bold",
	},
	margin: {
		margin: "5px 0",
	},
})

const HeaderSettingsUsername = ({ title, details }) => {
	return (
		<SWrapperFlex className={css(style.flex)}>
			<Text styles={[style.username, style.margin]}>{title}</Text>
			<Text styles={style.margin} color="gray">
				{details}
			</Text>
		</SWrapperFlex>
	)
}

export default memo(HeaderSettingsUsername)
