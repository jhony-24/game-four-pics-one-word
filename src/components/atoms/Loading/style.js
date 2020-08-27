import { StyleSheet } from "aphrodite/no-important"
import { styled } from "styletron-react"

const rotateKeyFrames = {
	"0%": {
		transform: "rotate(-360deg)",
	},
}

const style = StyleSheet.create({
	flex: {
		flexDirection: "column",
	},
})

const Loading = styled("div", props => ({
	borderRadius: "100%",
	border: "2px solid transparent",
	animationDuration: ".5s",
	animationIterationCount: "infinite",
	animationTimingFunction: "linear",
	animationName: [rotateKeyFrames],
	borderLeftColor: props.$color,
	width: props.$size,
	heigth: props.$size,
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
