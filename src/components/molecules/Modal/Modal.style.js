import styled from "src/theme/styled"

export const SModalBackdrop = styled("div", {
	zIndex: 1000,
	position: "fixed",
})

export const SModalContainer = styled("div", ({ $theme }) => ({
	background: $theme.colors.color_smooth_darker_modal,
	height: "100%",
	width: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}))

export const SModalCardContainer = styled("div", ({ $theme }) => ({
	boxShadow: $theme.shadows.medium,
	background: $theme.colors.color_primary_light,
	width: "90%",
	padding: "10px",
	borderRadius: "20px",
	"@media screen and (min-width:400px)": {
		width: "400px",
	},
}))

export const SModalTitle = styled("span", {
	fontWeight: "bold",
})
