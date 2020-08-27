import { StyleSheet } from "aphrodite/no-important"
import styled from "src/theme/styled"

const style = StyleSheet.create({
	flex: {
		flexDirection: "column",
	},
})

const Loading = styled("div", props => ({
	borderRadius: "100%",
	animationDuration: ".5s",
	animationIterationCount: "infinite",
	animationTimingFunction: "linear",
	border : "2px solid transparent",
	animationName: {
		from: {
			transform: "rotate(-360deg)",
		},
	},
	borderLeft : `2px solid ${props.$theme.colors.color_primary}`,
	width: props.$size,
	height: props.$size,
}))

const Label = styled("div", props => ({
	margin: "8px auto",
	fontSize: ".72em",
	color: props.$color,
}))

const SLoading = {
	Loading,
	Label,
	Flex: style.flex,
}

export default SLoading
