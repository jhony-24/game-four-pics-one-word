import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

export const SIconNatural = styled("div", ({ $color }) => ({
	color: $color,
}))

export const STextIconNatural = styled("div", ({ $color }) => ({
	color: $color,
	fontWeight: "bold",
	userSelect: "none",
}))

export const SFlex = withStyleDeep(SWrapperFlex, {
	justifyContent: "none",
	padding: "10px",
	width: "auto",
})
