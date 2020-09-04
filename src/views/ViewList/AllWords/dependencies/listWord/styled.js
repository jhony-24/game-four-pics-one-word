import styled from "src/theme/styled"

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
