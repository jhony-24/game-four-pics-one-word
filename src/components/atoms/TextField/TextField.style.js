import { StyleSheet } from "aphrodite/no-important"
import { TEXT_SECONDARY } from "src/theme"
import styled from "src/theme/styled"

export default StyleSheet.create({
	flex: {
		padding: 15,
		borderRadius: "20px",
	},
	input: {
		width: "100%",
		":hover": {
			color: TEXT_SECONDARY,
		},
	},
})

export const STextFieldLabel = styled("span", ({ $color }) => ({
	color: $color,
	marginRight: "10px",
	lineHeight: 0,
}))
