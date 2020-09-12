import styled from "src/theme/styled"

export const SAvatar = styled("div", ({ $size, $color }) => ({
	width: $size,
	height: $size,
	background: $color,
	borderRadius: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	margin: "auto",
}))
