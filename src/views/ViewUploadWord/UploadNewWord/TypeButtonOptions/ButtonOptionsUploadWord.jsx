import React from "react"
import { SButtonCancel, SButtonUploadWord } from "../UploadNewWord.style"

const ButtonOptionsUploadWord = ({ onUpload, onCancel }) => (
	<>
		<SButtonUploadWord onClick={onUpload}>subir esta palabra</SButtonUploadWord>
		<SButtonCancel onClick={onCancel}>cancelar</SButtonCancel>
	</>
)

export default ButtonOptionsUploadWord
