import { StyleSheet } from "aphrodite/no-important"
import { TEXT_SECONDARY } from "src/theme"
import { styled } from "styletron-react"

export const style = StyleSheet.create({
	flex: {
		padding: 15,
		borderRadius: "20px",
	},
})

const Input = styled("input", props => ({
	width: "100%",
	":hover": {
		color: props.$color || TEXT_SECONDARY,
	},
}))

const Label = styled("span", props => ({
	marginRight: "10px",
	lineHeight: 0,
	color: props.$color,
}))

const STextField = {
	Input,
	Label,
	Flex: style.flex,
}
export default STextField
