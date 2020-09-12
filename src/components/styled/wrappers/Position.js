import styled from "src/theme/styled"

const positionSharedCSS = {
	position: "fixed",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}

const TopLeft = styled("div", {
	...positionSharedCSS,
	left: "0px",
	top: "0px",
})

const TopRight = styled("div", {
	...positionSharedCSS,
	top: "0px",
	right: "0px",
})

const BottomLeft = styled("div", {
	...positionSharedCSS,
	bottom: "0px",
	left: "px",
})

const BottomRight = styled("div", {
	...positionSharedCSS,
	bottom: "0px",
	right: "px",
})

const Full = styled("div", {
	...positionSharedCSS,
	left: "0px",
	right: "0px",
	top: "0px",
	bottom: "0px",
})

const Absolute = styled("div", {
	position: "absolute",
	display : "flex",
	width : "100%",
	justifyContent : "center"
})

export default {
	TopLeft,
	TopRight,
	BottomLeft,
	BottomRight,
	Full,
	Absolute
}
