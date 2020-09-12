import { motion } from "framer-motion"
import Position from "src/components/styled/wrappers/Position"
import SWrapperContainer from "src/components/styled/wrappers/SWrapperContainer"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

export const SCardBottomSheet = styled(motion.div, ({ $theme }) => ({
	backgroundColor : $theme.colors.color_primary_light,
	width: "100%",
	boxShadow: "0 0 20px rgba(0,0,0,.1)",
	borderRadius: "10px 10px 0 0",
}))

export const SCardBottomSheetHeader = withStyleDeep(SWrapperFlex, {
	flexDirection : "column",
	justifyItems : "center"
})

export const SCardBottomSheetBarDraggable = styled("div", {
	width: "40px",
	height: "2px",
	borderRadius: "40px",
	background: "silver",
	margin: "10px auto",
})

export const SFlexBody = withStyleDeep(SWrapperFlex, {
	flexDirection: "column",
	justifyContent: "center",
})

export const SBody = withStyleDeep(SWrapperContainer, {
	padding: "15px",
})

export const SCardBottomPosition = withStyleDeep(Position.BottomLeft, ({$theme}) => ({
	width: "100%",
}))
