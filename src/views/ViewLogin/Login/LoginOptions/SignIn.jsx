import React, { Fragment, useRef } from "react"
import Button from "src/components/atoms/Button"
import LoginInput from "../FormLoginControl/LoginInput"
import { userActions  } from "src/redux/user"
import { connect } from "react-redux"
import LoginSignUpText from "../FormLoginControl/LoginSignUpText"
import { STextForgetPassword } from "./LoginOptions.style"

const SignIn = ({ onOpenRegister, signIn }) => {
	const _username = useRef();
	const _pass = useRef();
	const onSignIn = () => signIn({ username : _username.current.value, pass : _pass.current.value })	

	return (
		<Fragment>
			<LoginInput.Username forwardRef={_username} />
			<LoginInput.Pass forwardRef={_pass} />
			<STextForgetPassword> e olvidado mi contraseña ?</STextForgetPassword>
			<Button onClick={onSignIn}>INICIAR SESIÓN</Button>
			<LoginSignUpText onClick={onOpenRegister} />
		</Fragment>
	)
}

const mapDispatch = {
	signIn: userActions.signIn,
}
export default connect(null, mapDispatch)(SignIn)
