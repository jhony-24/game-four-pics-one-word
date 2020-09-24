import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

export const SFlex = withStyleDeep(SWrapperFlex, {
	flexDirection: "column",
})

const sizeLoading = "30px";
export const SLoading = styled("div", ({$theme}) => ({
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
	width: sizeLoading,
	height: sizeLoading,
	borderLeft: `2px solid ${$theme.colors.color_primary}`,
}))

export const SLabel = styled("div", ({ $theme, $color }) => ({
	margin: "8px auto",
	fontSize: $theme.fontSizes.smallUltra,
	color: $color,
}))
