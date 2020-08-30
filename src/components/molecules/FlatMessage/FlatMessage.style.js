import { StyleSheet } from "aphrodite/no-important"
import styled from "src/theme/styled"

export default StyleSheet.create({
	message: {
		justifyContent: "unset",
	},
	tM: {
		fontSize: ".7em",
		marginRight: 5,
		userSelect: "none",
	},
})

export const SCloseButton = styled("span", props => ({
	lineHeight: 0,
}))

export const STextMessage = styled("span", props => ({
	fontSize: ".7em",
	marginRight: "5px",
	userSelect: "none",
	color : props.$color
}))
