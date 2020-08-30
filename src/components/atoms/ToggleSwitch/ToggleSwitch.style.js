import { StyleSheet } from "aphrodite/no-important"
import { PRIMARY_COLOR, TEXT_PRIMARY, TEXT_SECONDARY } from "src/theme"
import { styled } from "src/theme/styled"

export default StyleSheet.create({
	input: {
		display: "none",
		":checked + div": {
			transform: "translateX(100%)",
			border: "1px solid " + TEXT_SECONDARY,
		},
	},
})

export const SContainerToggleSwitch = styled("label",({ $theme, ...props }) => ({
		display: "block",
		position: "relative",
		width: "40px",
		height: "20px",
		borderRadius: "20px",
		background: props.$active ? PRIMARY_COLOR : "rgba(0,0,0,.1)",
		transition: ".3s",
	})
)

export const SCheckButtonCircular = styled("div", ({ $theme, ...props }) => ({
	height: "20px",
	width: "20px",
	borderRadius: "100%",
	transition: ".3s",
	position: "absolute",
	background: props.$active ? TEXT_PRIMARY : "gray",
}))
