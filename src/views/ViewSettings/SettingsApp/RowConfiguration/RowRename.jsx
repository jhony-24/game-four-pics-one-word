import React from 'react'
import { IoIosText } from 'react-icons/io';
import TextField from 'src/components/atoms/TextField';
import style from "../SettingsApp.style"
import { connect } from 'react-redux';
import { userActions, userSelectors } from 'src/redux/user';
import useTextInput from 'src/hooks/useInterfaceControls/useTextInput';
import RowSettingSheet from '../RowSetting/RowSettingSheet';
import useLanguage from 'src/hooks/useInternationalize/useLanguage';

const RowRename = ({ defaultUsername, updateUsername }) => {
    const username = useTextInput();
		const { translate } = useLanguage("game.settings.exit.username.row.");

    const onUpdateUsername = () => {
        updateUsername({ username: username.value });
    };

    return (
        <RowSettingSheet
            title={translate("0")}
            detail={translate("1")}
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

const mapState = state => ({
	defaultUsername: userSelectors.getUsername(state),
})
const mapDispatch = {
    updateUsername: userActions.setUpdateInformation
}
export default connect(mapState, mapDispatch)(RowRename);
