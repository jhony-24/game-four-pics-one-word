import Position from "./Position"
import { withStyleDeep } from "styletron-react"

export default withStyleDeep(Position.Full, ({ $theme }) => ({
	backgroundColor: $theme.colors.color_smooth_darker_modal,
	zIndex: 1000,
}))
