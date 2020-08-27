import { withStyle } from "styletron-react"
import SButtonPrimary from "./SButtonPrimary"

export default withStyle(SButtonPrimary, ({ $theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "60px",
	height: "60px",
	position: "fixed",
	zIndex: 100,
	bottom: 0,
	right: 0,
	margin: "20px",
	borderRadius: $theme.radius.total,
}))
