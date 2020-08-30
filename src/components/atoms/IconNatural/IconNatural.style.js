import { StyleSheet } from "aphrodite/no-important"
import styled from "src/theme/styled"

export default StyleSheet.create({
	flex: {
		justifyContent: "none",
		padding: "10px",
		width: "auto",
	},
})

export const SIconNatural = styled("div", ({ $theme, ...props }) => ({
	color: props.$color,
}))

export const STextIconNatural = styled("div", ({ $theme, ...props }) => ({
	fontWeight: "bold",
	userSelect: "none",
	color: props.$color,
}))
