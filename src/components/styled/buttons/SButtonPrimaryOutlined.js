import styled from "src/theme/styled"

export default styled("button", ({ $theme }) => ({
	margin: "1em auto 3em",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "10px 20px",
	fontWeight: "bold",
	border: "2px solid currentColor",
	borderRadius: $theme.radius.normal,
	color: $theme.colors.color_primary,
}))
