import React from 'react'
import { IoIosText } from 'react-icons/io';
import TextField from 'src/components/atoms/TextField';
import style from "../style"
import { connect } from 'react-redux';
import { userActions } from 'src/redux/user';
import useTextInput from 'src/hooks/useTextInput';
import RowSettingSheet from '../subcomponents/RowSettingSheet';

const RowRename = ({ defaultUsername, updateUsername }) => {
    const username = useTextInput();

    const onUpdateUsername = () => {
        updateUsername({ username: username.value });
    }

    return (
        <RowSettingSheet
            title="change my name"
            detail="tener nuevo nombre de usuario"
            iconColor="rgb(30,130,230)"
            avatar={<IoIosText color="white" />}
            titleSheet="asignar nuevo nombre"
            textButtonSheet="cambiar"
            onSubmitSheet={onUpdateUsername} >
            <TextField
                {...username}
                value={defaultUsername}
                placeholder="ingresar nombre"
                styles={style.input} />
        </RowSettingSheet>
    )
}

const mapDispatchToProps = {
    updateUsername: userActions.updateUserName
}
export default connect(null, mapDispatchToProps)(RowRename);
