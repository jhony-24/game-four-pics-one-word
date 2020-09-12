import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

export const SContainerTitle = styled("div", ({ $theme, $color }) => ({
	color: $color || $theme.colors.color_primary_dark,
	fontWeight: "bold",
	fontSize: ".9em",
	wordBreak: "break-word",
	userSelect: "none",
}))

export const SContainerDetail = styled("div", ({ $theme, $color }) => ({
	color: $color || $theme.colors.color_smooth_medium,
	fontSize: ".72em",
	marginTop: "3px",
	lineHeight: "18px",
	userSelect: "none",
}))

export const SContainerParagraph = withStyleDeep(SWrapperFlex, {
	flexDirection: "column",
	alignItems: "none",
})
