import React from "react";
import Button from "src/components/atoms/Button"
import { StyleSheet } from "aphrodite/no-important"

const selfStyle = StyleSheet.create({
    btnUploadWord: {
        width: "90%",
        marginTop: 10
    },
    btnUploadCancel: {
        width: "90%",
        marginTop: 20,
        marginBottom: 20,
        boxShadow: "none",
        background: "inherit",
        color: "gray"
    }
});

const ButtonOptionsUploadWord = ({ onUpload, onCancel }) => (
    <>
        <Button
            styles={selfStyle.btnUploadWord}
            onClick={onUpload}>subir esta palabra</Button>
        <Button
            styles={selfStyle.btnUploadCancel}
            onClick={onCancel} >cancelar</Button>
    </>
)

export default ButtonOptionsUploadWord;