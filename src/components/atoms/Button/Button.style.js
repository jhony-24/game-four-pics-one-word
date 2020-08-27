import { PRIMARY_COLOR, TEXT_PRIMARY } from "src/theme"
import { styled } from "styletron-react"

const Button = styled("button", {
	borderRadius: "20px",
	padding: "12px",
	width: "100%",
	transition: ".2s",
	fontSize: "12px",
	textAlign: "center",
	boxShadow: "0 15px 20px rgba(100,100,100,.3)",
	background: PRIMARY_COLOR,
	color: TEXT_PRIMARY,
	":hover": {
		opacity: 0.9,
	},
})

const ButtonLabel = styled("span", {
	display: "block",
})

const SButton = {
	Button,
	ButtonLabel,
}
export default SButton
