import { StyleSheet } from "aphrodite/no-important"
import SButtonPrimary from "src/components/styled/buttons/SButtonPrimary"
import { withStyleDeep } from "styletron-react"

export default StyleSheet.create({
	gridPreviewImages: {
		borderRadius: 10,
		gridTemplateColumns: "repeat(4,1fr)",
		width: 200,
		margin: "1em auto",
	},
	input: {
		border: "1px solid silver",
		width: "80%",
		margin: 10,
	},
})


export const SButtonUploadWord = withStyleDeep(SButtonPrimary, {
	width: "90%",
	marginTop: "10px",
})

export const SButtonCancel = withStyleDeep(SButtonPrimary, {
	width: "90%",
	marginTop: "20px",
	marginBottom: "20px",
	boxShadow: "none",
	background: "inherit",
	color: "gray",
})
