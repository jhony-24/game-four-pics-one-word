import styled from "src/theme/styled"

export default styled("button", ({ $theme }) => ({
	borderRadius: $theme.radius.normal,
	color: $theme.colors.color_primary,
	margin: "1em auto 3em",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "10px 20px",
	fontWeight: "bold",
	border: "2px solid currentColor",
}))
