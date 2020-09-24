import { motion } from "framer-motion"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import SWrapperGrid from "src/components/styled/wrappers/SWrapperGrid"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

export const SVerificationInputContainer = withStyleDeep(SWrapperGrid,({ $repeat }) => ({
		gap: "10px",
		display: "inline-grid",
		gridTemplateColumns: `repeat(${$repeat},1fr)`,
		margin:"auto",
		justifyItems: "center"
	})
)

const styleAtomSharedInput = {
	width: "40px",
	height: "40px",
	borderRadius: "8px",
	borderWidth: "2px",
	borderStyle: "solid",
	borderColor: "transparent",
	backgroundColor: "rgba(0,0,0,.2)",
	transition: ".3s"
}

export const SVerificationInput = {
	WrapperDisabled: withStyleDeep(SWrapperFlex,{
		...styleAtomSharedInput,
	}),
	WrapperInput: styled(motion.input, ({ $complete }) => ({
		...styleAtomSharedInput,
		...$complete && {
			borderColor : "rgb(30,230,100)",
			backgroundColor: "transparent"
		},
		textAlign: "center",
	})),
}
