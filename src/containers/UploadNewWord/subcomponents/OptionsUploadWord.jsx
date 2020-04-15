import React from "react";
import style from "../style";
import Button from "src/components/atoms/Button"


const OptionsUploadWord = ({ onUpload, onCancel }) => (
    <>
        <Button
            styles={style.btnUploadWord._definition}
            onClick={onUpload}>subir esta palabra</Button>
        <Button
            styles={style.btnUploadCancel._definition}
            onClick={onCancel} >cancelar</Button>
    </>
)

export default OptionsUploadWord;