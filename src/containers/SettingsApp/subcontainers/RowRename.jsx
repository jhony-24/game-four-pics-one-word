import React from 'react'
import { IoIosText } from 'react-icons/io';
import TextField from 'src/components/atoms/TextField';
import style from "../style"
import { connect } from 'react-redux';
import { userActions } from 'src/ducks/user';
import useTextInput from 'src/use/useTextInput';
import RowSettingSheet from '../subcomponents/RowSettingSheet';

const RowRename = ({ defaultUsername, updateUser }) => {
    const username = useTextInput();

    const onUpdateUser = () => {
        updateUser({ username: username.value });
    }

    return (
        <RowSettingSheet
            title="change my name"
            detail="tener nuevo nombre de usuario"
            iconColor="rgb(30,130,230)"
            avatar={<IoIosText color="white" />}
            titleSheet="asignar nuevo nombre"
            textButtonSheet="cambiar"
            onSubmitSheet={onUpdateUser} >
            <TextField
                {...username}
                value={defaultUsername}
                placeholder="ingresar nombre"
                styles={style.input._definition} />
        </RowSettingSheet>
    )
}

const mapDispatchToProps = {
    updateUser: userActions.updateUser
}
export default connect(null, mapDispatchToProps)(RowRename);
