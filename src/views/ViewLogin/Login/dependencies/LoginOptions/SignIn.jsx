import React, { createRef, Fragment } from "react"
import Button from "src/components/atoms/Button"
import Text from "src/components/atoms/Text"
import style from "../../style"
import LoginInput from "../FormLoginControl/LoginInput"
import { userActions } from "src/redux/user"
import { connect } from "react-redux"
import LoginSignUpText from "../FormLoginControl/LoginSignUpText"

const SignIn = ({ onOpenRegister, signIn }) => {
	const _username = createRef()
	const _pass = createRef()
	const username = _username.current?.value
	const pass = _pass.current?.value
	const onSignIn = () => signIn({ username, pass })

	return (
		<Fragment>
			<LoginInput.Username to={_username} />
			<LoginInput.Pass to={_pass} />
			<Text styles={[style.smallText, style.right]}> e olvidado mi contraseña ?</Text>
			<Button onClick={onSignIn}>INICIAR SESIÓN</Button>
			<LoginSignUpText onClick={onOpenRegister} />
		</Fragment>
	)
}

const mapDispatch = {
	signIn: userActions.signIn,
}
export default connect(null, mapDispatch)(SignIn)
