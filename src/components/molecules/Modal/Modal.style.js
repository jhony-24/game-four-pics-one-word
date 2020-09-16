import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

export const SModalBackdrop = styled("div", {
	zIndex: 1000,
	position: "fixed",
})

export const SModalContainer = styled("div", ({ $theme }) => ({
	background: $theme.colors.color_smooth_darker_modal,
	height: "100%",
	width: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}))


export const SModalHeaderContainer = withStyleDeep(SWrapperFlex,{
	marginBottom : "10px"
});

export const SModalCardContainer = styled("div", ({ $theme }) => ({
	boxShadow: $theme.shadows.medium,
	background: $theme.colors.color_primary_light,
	width: "90%",
	padding: "10px",
	borderRadius: "20px",
	"@media screen and (min-width:400px)": {
		width: "400px",
	},
}))

export const SModalTitle = styled("span", {
	fontWeight: "bold",
})
