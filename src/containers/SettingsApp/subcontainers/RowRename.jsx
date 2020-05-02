import React, { useState } from 'react'
import { IoIosText } from 'react-icons/io';
import RowSetting from '../subcomponents/RowSetting';
import BottomSheet from 'src/components/molecules/BottomSheet';
import Button from 'src/components/atoms/Button';
import TextField from 'src/components/atoms/TextField/TextField';
import style from "../style"

const RowRename = ({ defaultUsername }) => {
    const [open, setOpen] = useState(false);

    const openSheet = state => {
        setOpen(state);
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
            <TextField value={defaultUsername} placeholder="ingresar nombre" styles={style.input._definition} />
            <Button> cambiar</Button>
        </BottomSheet>
    </>)
}

export default RowRename;
