import { StyleSheet } from "aphrodite/no-important"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

export default StyleSheet.create({
	header: {
		":hover": false,
	},
	paragraph: {
		display: "flex",
		justifyContent: "center",
		textAlign: "center",
		fontSize: "1.3em",
		margin: "1em auto",
		width: "80%",
	},
})

export const SImageCallAction = styled("img", {
	width: "70%",
	margin: "20px 0",
})

export const SFlexBody = withStyleDeep(SWrapperFlex, {
	flexDirection: "column",
})
