import styled from "src/theme/styled"

export default styled("span", ({ $theme, ...props }) => ({
	userSelect : "none",
	color : $theme.colors[props.$color],
	fontSize :  props.$fontSize ? $theme.fontSizes[props.$fontSize] : $theme.fontSizes.small
}))
