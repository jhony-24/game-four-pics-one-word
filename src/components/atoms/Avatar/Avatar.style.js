import { styled } from "styletron-react"

const Avatar = styled("div", props => ({
	borderRadius: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	margin: "auto",
	width: props.$size,
	height: props.$size,
	background: props.$color,
}))

const SAvatar = {
	Avatar,
}
export default SAvatar
