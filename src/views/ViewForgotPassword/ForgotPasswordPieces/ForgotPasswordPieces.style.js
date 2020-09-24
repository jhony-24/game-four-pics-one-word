import { motion } from "framer-motion"
import SLabelBlock from "src/components/styled/labels/SLabelBlock"
import SLabelWrapper from "src/components/styled/labels/SLabelWrapper"
import SWrapperContainer from "src/components/styled/wrappers/SWrapperContainer"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

/**
 * Components of title message primary
 */
export const STitleMessage = {
	Container: withStyleDeep(SWrapperContainer, ({ $dir }) => ({
		textAlign: $dir,
		padding: "20px",
		margin: "20px auto",
	})),
	Title: withStyleDeep(SLabelWrapper, ({ $theme }) => ({
		color: $theme.colors.color_primary_dark,
		fontSize: $theme.fontSizes.largeUltra2,
		display: "block",
		marginBottom: "40px",
	})),
	Message: withStyleDeep(SLabelWrapper, ({ $theme }) => ({
		color: $theme.colors.color_smooth_darker,
		fontSize: $theme.fontSizes.large,
		display: "block",
		lineHeight: "30px",
		textShadow: "0 10px 20px rgba(0,0,0,.1)",
	})),
}

/**
 * Components of card to choose type forgot password
 */
export const SForgotPasswordCard = {
	Container: styled(motion.div, () => ({
		background: "rgba(0,0,0,.03)",
		display: "grid",
		gridTemplateColumns: "25% 1fr",
		borderRadius: "10px",
		padding: "10px",
		margin: "0 auto 20px",
		cursor: "pointer",
	})),
	Item: withStyleDeep(SWrapperFlex, ({ $dir, $justify, $align, $mr }) => ({
		flexDirection: $dir,
		justifyContent: $justify,
		alignItems: $align || "center",
		marginRight: $mr,
		width: "100%",
	})),
}

/**
 * Components of content card
 */
export const SForgotPasswordCardText = {
	Title: withStyleDeep(SLabelBlock, ({ $theme }) => ({
		fontSize: $theme.fontSizes.normal,
		fontWeight: "900",
		marginBottom: "5px",
		color: "silver",
	})),
	Message: withStyleDeep(SLabelBlock, ({ $theme }) => ({
		fontSize: $theme.fontSizes.normal,
		color: $theme.colors.color_smooth_darker,
		fontWeight: "900",
		display: "flex",
		alignItems: "center",
	})),
	Point: styled("div", {
		display: "inline-block",
		backgroundColor: "black",
		width: "4px",
		height: "4px",
		borderRadius: "100%",
		marginRight: "4px",
	}),
}

export const SForgotPasswordWrapperGoBack = styled("div", ({ $theme }) => ({
	marginBottom: "20px",
	padding: "20px",
	color: $theme.colors.color_smooth_darker,
}))
