import { StyleSheet } from "aphrodite/no-important"
import SCardGradientPrimary from "src/components/styled/cards/SCardGradientPrimary"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

export default new StyleSheet.create({
	img: {
		marginRight: "1em",
		width: "5em",
		height: "5em",
		flex : "none"
	},
})

export const SHeaderCard = withStyleDeep(SCardGradientPrimary, ({$theme})=>({
	boxShadow: $theme.shadows.large,
	borderRadius: "0 0 2em 7em",
	marginBottom: "3em",
}))

export const SHeaderSmallTitle = styled("span", ({ $theme }) => ({
	padding: $theme.fontSizes.small,
	width: "100%",
	textAlign: "center",
	fontSize: "12px",
	userSelect: "none",
}))

export const SHeaderTitleContainer = styled("h1", {
	fontSize: "1.3em",
	marginBottom: "3em",
	padding: "20px",
	width: "80%",
	userSelect: "none",
})

export const SHeaderTitlePrimary = styled("span", ({ $theme }) => ({
	fontSize: $theme.fontSizes.largeUltra,
}))

export const SHeaderTitleThink = styled("span", ({ $theme }) => ({
	fontWeight: "lighter",
	fontSize: $theme.fontSizes.medium,
}))
