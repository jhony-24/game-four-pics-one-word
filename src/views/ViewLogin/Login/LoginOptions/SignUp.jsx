import React, { useRef, Fragment } from "react"
import Button from "src/components/atoms/Button"
import LoginInput from "../FormLoginControl/LoginInput"
import Modal from "src/components/molecules/Modal"
import { userActions } from "src/redux/user"
import { connect } from "react-redux"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import style from "./LoginOptions.style";
import SWrapperContainer from "src/components/styled/wrappers/SWrapperContainer"
import useLanguage from "src/hooks/useInternationalize/useLanguage"

const SignUp = ({ onClose, visible, signUp }) => {
	const { translate } = useLanguage();
	const _username = useRef()
	const _pass = useRef()
	const onSignUp = () => signUp({ username : _username.current.value, pass : _pass.current.value });

	return (
		<Modal visible={visible} title={translate("game.login.modal-sign-up")} onClose={onClose}
			message={
				<Fragment>
					<SWrapperContainer>
						<LoginInput.Username forwardRef={_username} />
						<LoginInput.Pass forwardRef={_pass} />
					</SWrapperContainer>
					<SWrapperFlex>
						<Button onClick={onClose} styles={style.cancel}>{translate("common.cancel")}</Button>
						<Button onClick={onSignUp}>{translate("game.login.sign-up")}</Button>
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
