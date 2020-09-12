import styled from "src/theme/styled"

export const SCircleContainer = styled("div", ({ $theme }) => ({
	width: $theme.sizes.normal,
	height: $theme.sizes.normal,
	overflow: "hidden",
	borderRadius: "100%",
	display: "grid",
	gridTemplateColumns: "repeat(2,1fr)",
	gridTemplateRows: "auto",
	gridGap: 2,
}))

export const SCircleAvatarImage = styled("div", ({ $image }) => ({
	backgroundSize: "cover, 20px",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundColor: "rgba(100,100,100,.1)",
	backgroundImage: `url("${$image}")`,
}))

export const SCircleSquare = styled("div", {
	position: "relative",
})
