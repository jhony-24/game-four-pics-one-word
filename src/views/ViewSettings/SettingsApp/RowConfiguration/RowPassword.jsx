import React from 'react'
import { IoIosLock } from 'react-icons/io';
import TextField from 'src/components/atoms/TextField';
import style from "../SettingsApp.style"
import { connect } from 'react-redux';
import RowSettingSheet from '../RowSetting/RowSettingSheet';
import { userActions } from 'src/redux/user';
import useTextInput from 'src/hooks/useInterfaceControls/useTextInput';
import useLanguage from 'src/hooks/useInternationalize/useLanguage';

const RowPassword = ({ updatePassword }) => {
    const password = useTextInput();
		const { translate } = useLanguage("game.settings.exit.password.row.");

    const onUpdatePassword = () => {
        updatePassword({pass:password.value});
    }

    return (
        <RowSettingSheet
            title={translate("0")}
            detail={translate("1")}
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
