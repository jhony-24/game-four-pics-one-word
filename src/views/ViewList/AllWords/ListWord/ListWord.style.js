import { StyleSheet } from "aphrodite/no-important"
import { TEXT_PRIMARY } from "src/theme"
import SCardGradientPrimary from "src/components/styled/cards/SCardGradientPrimary"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import { withStyleDeep } from "styletron-react"

export default StyleSheet.create({
	title: {
		margin: "auto",
		paddingTop: 10,
		width: "90%",
		fontSize: "1.2em",
	},
	circleImage: {
		border: `2px solid ${TEXT_PRIMARY}`,
		marginBottom: 5,
		gridGap: 0,
	},
	rankHigh: {
		width: "65px",
		height: "65px",
	},
	textRank: {
		fontSize: ".7em",
		marginTop: 5,
	},
})

export const CardRankingWords = withStyleDeep(SCardGradientPrimary, {
	clipPath: "ellipse(100% 100% at 50% 0%)",
})

export const SFlexContainerItemsWord = withStyleDeep(SWrapperFlex, {
	margin: "auto",
	width: "90%",
})

export const SFlexItemWord = withStyleDeep(SWrapperFlex, {
	width: "auto",
	margin: "1em",
	flexDirection: "column",
})
