import SLabelBlock from "src/components/styled/labels/SLabelBlock"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import { withStyleDeep } from "styletron-react"

export const SFlexSocialContainer = withStyleDeep(SWrapperFlex, {
	display : "flex",
	flexDirection : "column",
	margin :"0 auto",
	width : "90%",
})

export const SLabelSocialTitle = withStyleDeep(SLabelBlock, ({$theme}) => ({
	fontSize : $theme.fontSizes.small,
	color : $theme.colors.color_primary,
	fontWeight : "800",
	marginBottom : "30px",
}))