import React, { createRef, Fragment } from "react"
import Button from "src/components/atoms/Button"
import style from "../../style"
import LoginInput from "../FormLoginControl/LoginInput"
import Flex from "src/components/dom/Flex"
import Modal from "src/components/molecules/Modal"
import { userActions } from "src/redux/user"
import { connect } from "react-redux"

const SignUp = ({ onClose, visible, signUp }) => {
	const _username = createRef()
	const _pass = createRef()
	const username = _username.current?.value
	const pass = _pass.current?.value
	const onSignUp = () => signUp({ username, pass });

	return (
		<Modal visible={visible} title="Registrarme" onClose={onClose}
			message={
				<Fragment>
					<LoginInput.Username to={_username} />
					<LoginInput.Pass to={_pass} />
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
	signUp: userActions.createUser,
}
export default connect(null, mapDispatch)(SignUp)
