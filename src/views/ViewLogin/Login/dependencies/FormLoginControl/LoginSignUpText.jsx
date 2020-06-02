import React from 'react'
import Text from "src/components/atoms/Text"
import { StyleSheet } from 'aphrodite'

const style = new StyleSheet.create({
    textSignUp: {
        fontSize: ".7em",
        marginBottom: "3em",
        color: "gray",
        textAlign: "center",
        marginTop: "4em",
    },
})

const LoginSignUpText = ({ onClick }) => {
    return (
        <Text styles={style.textSignUp} color="gray">
            no tengo una cuenta
            <strong
                role="button"
                tabIndex="0"
                style={{ color: "rgb(30,130,230)", cursor: "pointer" }}
                onClick={onClick}
                onKeyDown={onClick} > registrarme</strong>
        </Text>
    )
}

export default LoginSignUpText;