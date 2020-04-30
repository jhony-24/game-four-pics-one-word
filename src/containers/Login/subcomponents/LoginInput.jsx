import React from "react";
import { FaUserAlt, FaKey } from "react-icons/fa"
import TextField from "src/components/atoms/TextField"
import style from '../style';
import useTextInput from "src/use/useTextInput";
import LoginLabel from "./LoginLabel";

const Username = ({ to }) => {
    const username = useTextInput();
    return (
        <>
            {!username.isEmpty() && <LoginLabel text="Nombre de usuario" />}
            <TextField
                ref={to}
                placeholder="nombre de usuario..."
                icon={<FaUserAlt color="rgb(100,100,100)" />}
                styles={{ ...style.input._definition }}
                {...username} />
        </>
    )
}

const Pass = ({ to }) => {
    const password = useTextInput();
    return (
        <>
            {!password.isEmpty() && <LoginLabel text="Contraseña" />}
            <TextField
                ref={to}
                placeholder="contraseña..."
                type="password"
                icon={<FaKey color="rgb(100,100,100)" />}
                styles={{ ...style.input._definition }}
                {...password} />
        </>
    )
}

export default { Username, Pass };