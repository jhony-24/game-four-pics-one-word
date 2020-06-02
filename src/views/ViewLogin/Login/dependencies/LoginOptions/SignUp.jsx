import React, { Component, createRef, Fragment } from 'react';
import Button from "src/components/atoms/Button"
import style from '../../style';
import LoginInput from '../FormLoginControl/LoginInput';
import Flex from "src/components/dom/Flex"
import Modal from 'src/components/molecules/Modal';

class SignUp extends Component {
    constructor() {
        super();
        this.username = createRef();
        this.pass = createRef();
    }

    signUp = () => {
        let username = this.username.current.value;
        let pass = this.pass.current.value;
        this.props.onClick({ username, pass });
    }

    render() {
        const { visible, onClose } = this.props;
        return (
            <Modal
                visible={visible}
                title="Registrarme"
                onClose={onClose}
                message={
                    <Fragment>
                        <LoginInput.Username to={this.username} />
                        <LoginInput.Pass to={this.pass} />
                        <Flex>
                            <Button onClick={onClose} styles={style.cancel}>CANCELAR</Button>
                            <Button onClick={this.signUp}>REGISTRARME</Button>
                        </Flex>
                    </Fragment>
                } />
        )
    }
}

export default SignUp;