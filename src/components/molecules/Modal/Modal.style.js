import { StyleSheet } from "aphrodite/no-important"
import { TEXT_PRIMARY } from "src/theme"
import styled from "src/theme/styled"

export default StyleSheet.create({
	backdrop: {
		zIndex: 1000,
		position: "fixed",
	},
})

export const SModalContainer = styled("div", {
	background: "rgba(0,0,0,.6)",
	height: "100%",
	width : "100%",
	display : "flex",
	alignItems : "center",
	justifyContent: "center",
})

export const SModalCardContainer = styled("div", {
	background: TEXT_PRIMARY,
	width: "90%",
	padding: "10px",
	borderRadius: "20px",
	boxShadow: "0 10px 20px rgba(0,0,0,.1)",
	"@media screen and (min-width:400px)": {
		width: "400px",
	},
})
