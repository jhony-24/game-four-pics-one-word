import { StyleSheet } from "aphrodite/no-important"

export default StyleSheet.create({
	flex: {
		transition: ".3s",
		padding: 5,
		":hover": {
			background: "rgba(100,100,100,.03)",
		},
	},
})

export const SFlexNone = styled("div", {
	flex: "none",
})
export const SFlexCenterFluid = styed("div", {
	width: "100%",
})
