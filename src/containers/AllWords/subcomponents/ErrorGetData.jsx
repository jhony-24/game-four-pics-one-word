import React from "react";
import { StyleSheet, css } from "aphrodite/lib";
import Text from "src/components/atoms/Text/Text";


const styles = StyleSheet.create({
    container : {
        margin : "auto",
        position : "fixed",
        top : "50%",
        left : "50%",
        transform : "translate(-50%,-50%)",
        textAlign : "center",
        background : "white",
        padding : "2em",
        borderRadius : "20px",
        "@media screen and (max-width:400px)" : {
            width :"80%"
        }
    },
    title : {
        marginBottom : "20px",
        color : "rgb(60,60,60)"
    }
})


const ErrorGetData = () => {
    return(
        <div className={css(styles.container)}>
            <h2 className={css(styles.title)} >Ups! A ocurrido un error</h2>
            <Text color="gray">los datos no se obtuvieron correctamente</Text>
        </div>
    )
}

export default ErrorGetData;