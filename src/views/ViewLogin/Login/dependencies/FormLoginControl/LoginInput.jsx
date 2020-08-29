import React from "react"
import { FaUserAlt, FaKey } from "react-icons/fa"
import TextField from "src/components/atoms/TextField"
import useTextInput from "src/hooks/useTextInput"
import LoginLabel from "./LoginLabel"
import { StyleSheet } from "aphrodite/no-important"

const style = new StyleSheet.create({
	input: {
		border: "1px solid rgba(100,100,100,.3)",
		margin: "1em 0 2em",
	},
})

const Username = ({ to }) => {
	const { isEmpty, ...username } = useTextInput()
	return (
		<>
			{!isEmpty() && <LoginLabel text="Nombre de usuario" />}
			<TextField
				ref={to}
				placeholder="nombre de usuario..."
				styles={style.input}
				icon={<FaUserAlt color="rgb(100,100,100)" />}
				{...username}
			/>
		</>
	)
}

const Pass = ({ to }) => {
	const { isEmpty, ...password } = useTextInput()
	return (
		<>
			{!isEmpty() && <LoginLabel text="Contraseña" />}
			<TextField
				ref={to}
				placeholder="contraseña..."
				type="password"
				icon={<FaKey color="rgb(100,100,100)" />}
				styles={style.input}
				{...password}
			/>
		</>
	)
}

export default { Username, Pass }
