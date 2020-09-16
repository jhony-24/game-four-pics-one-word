import React, { useRef, Fragment } from "react"
import Button from "src/components/atoms/Button"
import LoginInput from "../FormLoginControl/LoginInput"
import Modal from "src/components/molecules/Modal"
import { userActions } from "src/redux/user"
import { connect } from "react-redux"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import style from "./LoginOptions.style";
import SWrapperContainer from "src/components/styled/wrappers/SWrapperContainer"

const SignUp = ({ onClose, visible, signUp }) => {
	const _username = useRef()
	const _pass = useRef()
	const onSignUp = () => signUp({ username : _username.current.value, pass : _pass.current.value });

	return (
		<Modal visible={visible} title="Registrarme" onClose={onClose}
			message={
				<Fragment>
					<SWrapperContainer>
						<LoginInput.Username forwardRef={_username} />
						<LoginInput.Pass forwardRef={_pass} />
					</SWrapperContainer>
					<SWrapperFlex>
						<Button onClick={onClose} styles={style.cancel}> CANCELAR </Button>
						<Button onClick={onSignUp}>REGISTRARME</Button>
					</SWrapperFlex>
				</Fragment>
			}
		/>
	)
}

const mapDispatch = {
	signUp: userActions.signUp,
}
export default connect(null, mapDispatch)(SignUp)
