import styled from "src/theme/styled"

export default styled("span", ({ $theme, $fontSize, $color }) => ({
	userSelect: "none",
	color: $theme.colors[$color],
	fontSize: $fontSize ? $theme.fontSizes[$fontSize] : $theme.fontSizes.small,
}))
