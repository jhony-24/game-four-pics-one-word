import SLabelWrapper from "src/components/styled/labels/SLabelWrapper"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

export const SErrorGetDataContainer = styled("div", {
	margin: "auto",
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%,-50%)",
	textAlign: "center",
	background: "white",
	padding: "2em",
	borderRadius: "20px",
	"@media screen and (max-width:400px)": {
		width: "80%",
	},
})

export const SErrorTitle = styled("h2", {
	marginBottom: "20px",
	color: "rgb(60,60,60)",
})

export const SLinkReloadButton = styled("a", ({ $theme }) => ({
	backgroundColor: $theme.colors.color_primary,
	color: $theme.colors.color_primary_light,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "10px 20px",
	margin: "1em auto",
	borderRadius: "10px",
}))

export const SLinkReloadTextButton = withStyleDeep(SLabelWrapper, {
	marginRight: "10px",
})
