import React from 'react'
import { IoIosLock } from 'react-icons/io';
import TextField from 'src/components/atoms/TextField';
import style from "../style"
import { connect } from 'react-redux';
import RowSettingSheet from '../subcomponents/RowSettingSheet';

const RowPassword = ({ }) => {

    return (
        <RowSettingSheet
            title="update my password"
            detail="cambiar mi nombre por seguridad"
            iconColor="rgb(230,60,90)"
            avatar={<IoIosLock color="white" />}
            titleSheet="asignar nuevo nombre"
            textButtonSheet="cambiar" >
            <TextField
                placeholder="ingresar nueva contraseña"
                styles={style.input._definition} />
        </RowSettingSheet>
    )
}

export default connect(null)(RowPassword);
