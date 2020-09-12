import styled from "src/theme/styled"

export const SButtonLetter = styled("button", ({ $color, $background }) => ({
	color: $color,
	background: $background,
	justifyContent: "center",
	alignItems: "center",
	display: "flex",
	padding: "5px",
	borderRadius: "5px",
	boxShadow: "0 1px 1px rgba(0,0,0,.1)",
	transition: "background .3s, transform .2s",
	userSelect: "none",
	width: "100%",
	":active": {
		opacity: 0.7,
	},
}))

export const SLabelLetter = styled("span", ({ $visibility }) => ({
	visibility: $visibility ? "visible" : "hidden",
	textTransform: "uppercase",
}))
