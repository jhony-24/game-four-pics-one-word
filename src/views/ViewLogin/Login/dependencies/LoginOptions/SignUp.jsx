import React, { useRef, Fragment } from "react"
import Button from "src/components/atoms/Button"
import style from "../../style"
import LoginInput from "../FormLoginControl/LoginInput"
import Flex from "src/components/dom/Flex"
import Modal from "src/components/molecules/Modal"
import { userActions } from "src/redux/user"
import { connect } from "react-redux"

const SignUp = ({ onClose, visible, signUp }) => {
	const _username = useRef()
	const _pass = useRef()
	const onSignUp = () => signUp({ username : _username.current.value, pass : _pass.current.value });

	return (
		<Modal visible={visible} title="Registrarme" onClose={onClose}
			message={
				<Fragment>
					<LoginInput.Username forwardRef={_username} />
					<LoginInput.Pass forwardRef={_pass} />
					<Flex>
						<Button onClick={onClose} styles={style.cancel}> CANCELAR </Button>
						<Button onClick={onSignUp}>REGISTRARME</Button>
					</Flex>
				</Fragment>
			}
		/>
	)
}

const mapDispatch = {
	signUp: userActions.signUp,
}
export default connect(null, mapDispatch)(SignUp)
