import SLabelWrapper from "src/components/styled/labels/SLabelWrapper"
import styled from "src/theme/styled"
import { withStyleDeep } from "styletron-react"

export const FormTextLoginSignUp = withStyleDeep(SLabelWrapper, {
	fontSize: ".7em",
	marginTop: "3em",
	marginBottom: "1em",
	color: "gray",
	textAlign: "center",
})

export const FormTextLoginSignUpStrong = styled("strong", {
	color: "rgb(30,130,230)",
	cursor: "pointer",
})
