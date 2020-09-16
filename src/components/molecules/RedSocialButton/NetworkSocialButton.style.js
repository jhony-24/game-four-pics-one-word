import styled from "src/theme/styled"

export const SSocialButton = styled("button", ({ $theme, $background, $color }) => ({
	background: $background,
	color: $color,
	fontSize : $theme.fontSizes.small,
	marginBottom: "30px",
	borderRadius: "20px",
	padding: "10px",
	display: "flex",
	fontWeight : "bold",
	alignItems: "center",
	width: "100%",
	justifyContent: "center",
}))
