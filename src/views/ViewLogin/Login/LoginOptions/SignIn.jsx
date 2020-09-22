import React, { Fragment, useRef } from "react"
import Button from "src/components/atoms/Button"
import LoginInput from "../FormLoginControl/LoginInput"
import { userActions  } from "src/redux/user"
import { connect } from "react-redux"
import LoginSignUpText from "../FormLoginControl/LoginSignUpText"
import { STextForgetPassword } from "./LoginOptions.style"
import useLanguage from "src/hooks/useInternationalize/useLanguage"

const SignIn = ({ onOpenRegister, signIn }) => {
	const { translate } = useLanguage("game.login.");
	const _username = useRef();
	const _pass = useRef();
	const onSignIn = () => signIn({ username : _username.current.value, pass : _pass.current.value })	

	return (
		<Fragment>
			<LoginInput.Username forwardRef={_username} />
			<LoginInput.Pass forwardRef={_pass} />
			<STextForgetPassword>{translate("forgot-password")}</STextForgetPassword>
			<Button onClick={onSignIn}>{translate("sign-in")}</Button>
			<LoginSignUpText onClick={onOpenRegister} />
		</Fragment>
	)
}

const mapDispatch = {
	signIn: userActions.signIn,
}
export default connect(null, mapDispatch)(SignIn)
