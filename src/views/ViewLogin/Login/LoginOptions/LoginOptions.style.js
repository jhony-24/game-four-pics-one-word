import { StyleSheet } from "aphrodite/no-important"
import SLabelWrapper from "src/components/styled/labels/SLabelWrapper"
import { withStyleDeep } from "styletron-react"

export default StyleSheet.create({
	cancel: {
		background: "rgba(0,0,0,.02)",
		color: "gray",
		boxShadow: "unset",
		marginRight : "10px"
	},
})

export const STextForgetPassword = withStyleDeep(SLabelWrapper, ({$theme}) => ({
	color: $theme.colors.color_smooth_medium,
	fontSize: $theme.fontSizes.smallUltra,
	marginBottom: "3em",
	textAlign: "right",
}))
