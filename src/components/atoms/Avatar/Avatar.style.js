import { styled } from "styletron-react"

export const SAvatar = styled("div", props => ({
	borderRadius: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	margin: "auto",
	width: props.$size,
	height: props.$size,
	background: props.$color,
}))
