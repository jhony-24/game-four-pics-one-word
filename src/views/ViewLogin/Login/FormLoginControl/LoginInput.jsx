import React from "react"
import { FaUserAlt, FaKey } from "react-icons/fa"
import TextField from "src/components/atoms/TextField"
import useTextInput from "src/hooks/useInterfaceControls/useTextInput"
import LoginLabel from "./LoginLabel"
import { StyleSheet } from "aphrodite/no-important"
import useLanguage from "src/hooks/useInternationalize/useLanguage"

const style = new StyleSheet.create({
	input: {
		margin: "0 0 2em",
		background: "rgba(0,0,0,.07)",
	},
})

const baseLanguage = "game.login.text-field.";

const LoginInput = {
	Username: props => {
		const { translate } = useLanguage(baseLanguage);
		const { isEmpty, ...username } = useTextInput();
		const textUsername = translate("username");
		return (
			<>
				{!isEmpty() && <LoginLabel text={textUsername} />}
				<TextField
					{...username}
					ref={props.forwardRef}
					styles={style.input}
					placeholder={`${textUsername}...`}
					icon={<FaUserAlt color="rgb(100,100,100)" />}
				/>
			</>
		)
	},
	Pass: props => {
		const { translate } = useLanguage(baseLanguage);
		const { isEmpty, ...password } = useTextInput();
		const textPassword = translate("password");
		return (
			<>
				{!isEmpty() && <LoginLabel text={textPassword} />}
				<TextField
					{...password}
					ref={props.forwardRef}
					styles={style.input}
					type="password"
					placeholder={`${textPassword}...`}
					icon={<FaKey color="rgb(100,100,100)" />}
				/>
			</>
		)
	},
}

export default LoginInput
