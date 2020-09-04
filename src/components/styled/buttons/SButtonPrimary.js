import styled from "src/theme/styled"

export default styled("button", ({ $theme }) => ({
	padding: "12px",
	width: "100%",
	transition: ".2s",
	textAlign: "center",
	fontSize: $theme.fontSizes.small,
	boxShadow: $theme.radius.normal,
	borderRadius: $theme.radius.normal,
	background: $theme.gradients.color_primary_gradient,
	color: $theme.colors.color_primary_light,
	":hover": {
		opacity: 0.9,
	},
}))
