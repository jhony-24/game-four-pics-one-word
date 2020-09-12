import { StyleSheet } from "aphrodite/no-important"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import { withStyleDeep } from "styletron-react"

export default StyleSheet.create({
	motive: {
		fontSize: ".7em",
		margin: "3em 0 2em",
		color: "gray",
	},
	squareImage: {
		borderRadius: 10,
		width: "90%",
		margin: "2em auto",
		height: 250,
	},
})

export const SFlexContainerPreview = withStyleDeep(SWrapperFlex, {
	width: "90%",
	margin: "1em auto",
	display: "block",
})
