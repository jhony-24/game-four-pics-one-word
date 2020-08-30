import { StyleSheet } from "aphrodite/no-important"
import styled from "src/theme/styled"

const style = StyleSheet.create({
	flex: {
		flexDirection: "column",
		alignItems: "none",
	},
})

export const SParagraphTitle = styled("div", props => ({
	fontWeight: "bold",
	color: props.$color || "rgb(30,30,30)",
	fontSize: ".9em",
	wordBreak: "break-word",
	userSelect: "none",
}))

export const SParagraphDetail = styled("div", props => ({
	fontSize: ".72em",
	marginTop: "3px",
	lineHeight: "18px",
	userSelect: "none",
	color: props.$color || "gray",
}))

export default style;
