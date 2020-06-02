import React, { Component, createRef, Fragment } from 'react';
import Button from "src/components/atoms/Button"
import Text from "src/components/atoms/Text"
import style from '../../style';
import LoginInput from '../FormLoginControl/LoginInput';
import { userActions } from 'src/redux/user';
import { connect } from 'react-redux';

class SignIn extends Component {
    constructor() {
        super();
        this.username = createRef();
        this.pass = createRef();
    }

    signIn = () => {
        let username = this.username.current.value;
        let pass = this.pass.current.value;
        this.props.signIn({ username, pass });
    }

    render() {
        const { onOpenRegister } = this.props;
        return (
            <Fragment>
                <LoginInput.Username to={this.username} />
                <LoginInput.Pass to={this.pass} />
                <Text styles={[style.smallText, style.right]}>e olvidado mi contraseña ?</Text>
                <Button onClick={this.signIn}>INICIAR SESIÓN</Button>
                <Text styles={[style.smallText, style.center, style.marginTop]} color="gray">
                    no tengo una cuenta
                    <strong
                        role="button"
                        tabIndex="0"
                        style={{ color: "rgb(30,130,230)", cursor: "pointer" }}
                        onClick={onOpenRegister}
                        onKeyDown={onOpenRegister} > registrarme</strong>
                </Text>
            </Fragment>
        )
    }
}

const mapDispatchToProps = {
    signIn: userActions.signIn
}
export default connect(null, mapDispatchToProps)(SignIn);