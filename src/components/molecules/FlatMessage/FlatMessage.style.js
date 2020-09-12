import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

export const SCloseButton = styled("span", () => ({
	lineHeight: 0,
}))

export const STextMessage = styled("span", ({ $color }) => ({
	color: $color,
	fontSize: ".7em",
	marginRight: "5px",
	userSelect: "none",
}))

export const SFlex = withStyleDeep(SWrapperFlex, props => ({
	margin: `${props.$verticalMargin || 0}px ${props.$horizontalMargin || 0}px`,
	justifyContent: "unset",
}))
