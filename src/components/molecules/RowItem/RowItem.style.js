import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

export const SFlexContainer = withStyleDeep(SWrapperFlex, ({ $hover }) => ({
	transition: ".3s",
	padding: "5px",
	...($hover && {
		":hover": {
			background: "rgba(100,100,100,.03)",
		},
	}),
}))

export const SFlexNone = styled("div", {
	flex: "none",
})

export const SFlexCenterFluid = styled("div", {
	width: "100%",
})
