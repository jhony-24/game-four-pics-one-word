import styled from "src/theme/styled"

export const SButtonLetter = styled("button", props => ({
	justifyContent: "center",
	alignItems : "center",
	display : "flex",
	padding: "5px",
	borderRadius: "5px",
	boxShadow: "0 1px 1px rgba(0,0,0,.1)",
	transition: "background .3s, transform .2s",
	userSelect: "none",
	width : "100%",
	":active": {
		opacity: 0.7,
	},
	color: props.$color,
	background: props.$background,
}))

export const SLabelLetter = styled("span", props => ({
	textTransform: "uppercase",
	visibility: props.$visibility ? "visible" : "hidden",
}));