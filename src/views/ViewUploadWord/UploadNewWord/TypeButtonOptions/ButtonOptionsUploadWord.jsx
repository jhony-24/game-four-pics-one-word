import React from "react"
import useLanguage from "src/hooks/useInternationalize/useLanguage"
import { SButtonCancel, SButtonUploadWord } from "../UploadNewWord.style"

const ButtonOptionsUploadWord = ({ onUpload, onCancel }) => {
	const { translate } = useLanguage();
	return(
		<>
			<SButtonUploadWord onClick={onUpload}>{translate("game.upload-words.change.button")}</SButtonUploadWord>
			<SButtonCancel onClick={onCancel}>{translate("common.cancel")}</SButtonCancel>
		</>
	)
}

export default ButtonOptionsUploadWord
