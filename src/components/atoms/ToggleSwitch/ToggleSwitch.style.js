import styled from "src/theme/styled"

export const SInputChecker = styled("input", ({ $theme }) => ({
	display: "none",
	":checked + div": {
		transform: "translateX(100%)",
		border: "1px solid " + $theme.colors.color_primary,
	},
}))

export const SContainerToggleSwitch = styled("label", ({ $theme, $active }) => ({
		display: "block",
		position: "relative",
		width: "40px",
		height: "20px",
		borderRadius: "20px",
		transition: ".3s",
		background: $active ? $theme.gradients.color_primary_gradient : $theme.colors.color_smooth,
	})
)

export const SCheckButtonCircular = styled("div", ({ $theme, $active }) => ({
	height: "20px",
	width: "20px",
	borderRadius: "100%",
	transition: ".3s",
	position: "absolute",
	background: $active ? $theme.colors.color_primary_light : $theme.colors.color_smooth_medium,
}))
