import { StyleSheet } from "aphrodite/no-important"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import { withStyleDeep } from "styletron-react"

export default StyleSheet.create({
	fContainer: {
		width: "90%",
		margin: "auto",
	},
})

export const SFlexLoginBody = withStyleDeep(SWrapperFlex, {
	width: "100%",
	flexDirection: "column",
	alignItems: "stretch",
	marginBottom: "20px",
})
