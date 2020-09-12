import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

export const SSkeletonContainer = withStyleDeep(SWrapperFlex, {
	justifyContent: "none",
	alignItems: "stretch",
	flexDirection: "column",
	width: "90%",
	margin: "1em auto",
})

export const SSkeletonRow = withStyleDeep(SWrapperFlex, {
	width: "auto",
})

export const SSkeletonCol = styled("span", {
	display: "flex",
	padding: "20px 0",
	alignItems: "center",
})
