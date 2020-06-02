import React from "react";
import style from "../../style";
import Button from "src/components/atoms/Button"

const OptionsUploadWord = ({ onUpload, onCancel }) => (
    <>
        <Button
            styles={style.btnUploadWord}
            onClick={onUpload}>subir esta palabra</Button>
        <Button
            styles={style.btnUploadCancel}
            onClick={onCancel} >cancelar</Button>
    </>
)

export default OptionsUploadWord;