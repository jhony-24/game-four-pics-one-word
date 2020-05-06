import React, { useState } from 'react'
import { IoIosText } from 'react-icons/io';
import RowSetting from '../subcomponents/RowSetting';
import BottomSheet from 'src/components/molecules/BottomSheet';
import Button from 'src/components/atoms/Button';
import TextField from 'src/components/atoms/TextField/TextField';
import style from "../style"
import { connect } from 'react-redux';
import { userActions } from 'src/ducks/user';
import useTextInput from 'src/use/useTextInput';

const RowRename = ({ defaultUsername, updateUser }) => {
    const [open, setOpen] = useState(false);
    const username = useTextInput();

    const openSheet = state => {
        setOpen(state);
    }
    const onUpdateUser = () => {
        updateUser({ username: username.value });
        setOpen(false);
    }

    return (<>
        <RowSetting
            title="change my name"
            detail="tener nuevo nombre de usuario"
            bgIcon="rgb(30,130,230)"
            icon={<IoIosText color="white" />}
            onClick={openSheet}
        />
        <BottomSheet title="assign new username" open={open} onClose={isClose => setOpen(isClose)}>
            <TextField {...username} value={defaultUsername} placeholder="ingresar nombre" styles={style.input._definition} />
            <Button onClick={onUpdateUser}> cambiar</Button>
        </BottomSheet>
    </>)
}

const mapDispatchToProps = {
    updateUser: userActions.updateUser
}
export default connect(null, mapDispatchToProps)(RowRename);
