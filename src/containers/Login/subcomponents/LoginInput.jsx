import React from "react";
import { FaUserAlt, FaKey } from "react-icons/fa"
import TextField from "src/components/atoms/TextField"
import style from '../style';

const LoginInput = {
    Username({ to }) {
        return (<>
            <TextField
                ref={to}
                placeholder="nombre de usuario..."
                icon={<FaUserAlt color="rgb(100,100,100)" />}
                styles={{ ...style.input._definition }}
            />
        </>)
    },
    Pass({ to }) {
        return (<>
            <TextField
                ref={to}
                placeholder="contraseña..."
                type="password"
                icon={<FaKey color="rgb(100,100,100)" />}
                styles={{ ...style.input._definition }} />
        </>)
    }
}



export default LoginInput;