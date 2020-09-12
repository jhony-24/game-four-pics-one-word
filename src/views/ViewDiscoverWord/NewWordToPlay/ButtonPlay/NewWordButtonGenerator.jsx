import React from "react"
import Button from "src/components/atoms/Button"
import { StyleSheet, css } from "aphrodite/no-important"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"

const style = new StyleSheet.create({
	button: {
		width: "100%",
		margin: "1em",
	},
	buttonFlexCenter: {
		justifyContent: "center",
	},
})

const NewWordButtonGenerator = ({ children, ...props }) => {
	return (
		<Button styles={style.button} {...props}>
			<SWrapperFlex className={css(style.buttonFlexCenter)}>{children}</SWrapperFlex>
		</Button>
	)
}

export default NewWordButtonGenerator
