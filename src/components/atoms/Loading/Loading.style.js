import { StyleSheet } from "aphrodite/no-important"
import styled from "src/theme/styled"

export default StyleSheet.create({
	flex: {
		flexDirection: "column",
	},
})

export const SLoading = styled("div", props => ({
	borderRadius: "100%",
	animationDuration: ".5s",
	animationIterationCount: "infinite",
	animationTimingFunction: "linear",
	border: "2px solid transparent",
	animationName: {
		from: {
			transform: "rotate(-360deg)",
		},
	},
	borderLeft: `2px solid ${props.$theme.colors.color_primary}`,
	width: props.$size,
	height: props.$size,
}))

export const SLabel = styled("div", props => ({
	margin: "8px auto",
	fontSize: ".72em",
	color: props.$color,
}))