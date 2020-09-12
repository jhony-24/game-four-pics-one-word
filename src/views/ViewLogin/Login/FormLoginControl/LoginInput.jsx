import React from "react"
import { FaUserAlt, FaKey } from "react-icons/fa"
import TextField from "src/components/atoms/TextField"
import useTextInput from "src/hooks/useInterfaceControls/useTextInput"
import LoginLabel from "./LoginLabel"
import { StyleSheet } from "aphrodite/no-important"

const style = new StyleSheet.create({
	input: {
		border: "1px solid rgba(100,100,100,.3)",
		margin: "1em 0 2em",
	},
})

const Username =(props) => {
	const { isEmpty, ...username } = useTextInput()
	return (
		<>
			{!isEmpty() && <LoginLabel text="Nombre de usuario" />}
			<TextField
				{...username}
				ref={props.forwardRef}
				styles={style.input}
				placeholder="nombre de usuario..."
				icon={<FaUserAlt color="rgb(100,100,100)" />}
			/>
		</>
	)
}

const Pass = (props) => {
	const { isEmpty, ...password } = useTextInput()
	return (
		<>
			{!isEmpty() && <LoginLabel text="Contraseña" />}
			<TextField
				{...password}
				ref={props.forwardRef}
				styles={style.input}
				type="password"
				placeholder="contraseña..."
				icon={<FaKey color="rgb(100,100,100)" />}
			/>
		</>
	)
}

export default { Username, Pass }
