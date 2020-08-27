import styled from "src/theme/styled"

export default styled("div", ({ $theme }) => ({
	boxShadow: $theme.shadows.normal,
	background : $theme.gradients.color_primary_gradient,
	color : $theme.colors.color_primary_light
}))
