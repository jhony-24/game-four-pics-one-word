import SLabelBlock from "src/components/styled/labels/SLabelBlock"
import SLabelWrapper from "src/components/styled/labels/SLabelWrapper"
import SWrapperContainer from "src/components/styled/wrappers/SWrapperContainer"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import { withStyleDeep } from "styletron-react"

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

export const SForgotPasswordCard = {
	Container: withStyleDeep(SWrapperFlex, ({$theme,$active}) => ({
		background: "rgba(0,0,0,.03)",
		justifyContent: "center",
		border: $active && `2px solid ${$theme.colors.color_primary}`,
		borderRadius: "10px",
		padding: "10px",
		margin : "auto"
	})),
	Item: withStyleDeep(SWrapperFlex, ({ $dir, $justify, $align }) => ({
		flexDirection: $dir,
		justifyContent: $justify,
		alignItems: $align,
		display: "inline-flex",
		width: "auto",
	})),
}

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
	})),
}
