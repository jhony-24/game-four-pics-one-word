import React from 'react'
import { IoIosLock } from 'react-icons/io';
import TextField from 'src/components/atoms/TextField';
import style from "../../SettingsApp.style"
import { connect } from 'react-redux';
import RowSettingSheet from '../RowSetting/RowSettingSheet';
import { userActions } from 'src/redux/user';
import useTextInput from 'src/hooks/useInterfaceControls/useTextInput';

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
                styles={style.input} />
        </RowSettingSheet>
    )
}

const mapDispatchToProps = {
    updatePassword: userActions.setUpdateInformation
}
export default connect(null,mapDispatchToProps)(RowPassword);
