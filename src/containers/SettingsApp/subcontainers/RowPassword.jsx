import React from 'react'
import { IoIosLock } from 'react-icons/io';
import TextField from 'src/components/atoms/TextField';
import style from "../style"
import { connect } from 'react-redux';
import RowSettingSheet from '../subcomponents/RowSettingSheet';
import { userActions } from 'src/ducks/user';
import useTextInput from 'src/hooks/useTextInput';

const RowPassword = ({ updatePassword }) => {
    const password = useTextInput();

    const onUpdatePassword = () => {
        updatePassword({pass:password.value});
    }

    return (
        <RowSettingSheet
            title="update my password"
            detail="cambiar mi contraseña por seguridad"
            iconColor="rgb(230,60,90)"
            avatar={<IoIosLock color="white" />}
            titleSheet="asignar nueva contraseña"
            textButtonSheet="cambiar"
            onSubmitSheet={onUpdatePassword} >
            <TextField
                {...password}
                type="password"
                placeholder="ingresar nueva contraseña"
                styles={style.input._definition} />
        </RowSettingSheet>
    )
}

const mapDispatchToProps = {
    updatePassword: userActions.updatePassword
}
export default connect(null,mapDispatchToProps)(RowPassword);
