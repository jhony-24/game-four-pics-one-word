import styled from "src/theme/styled"

export const SCircleContainer = styled("div", ({ $theme }) => ({
	overflow: "hidden",
	borderRadius: "100%",
	display: "grid",
	gridTemplateColumns: "repeat(2,1fr)",
	gridTemplateRows: "auto",
	gridGap: 2,
	width: $theme.sizes.normal,
	height: $theme.sizes.normal,
}))

export const SCircleAvatarImage = styled("div", props => ({
	backgroundSize: "cover, 20px",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundColor: "rgba(100,100,100,.1)",
	backgroundImage : `url("${props.$image}")`
}))

export const SCircleSquare = styled("div", {
	position: "relative",
})
