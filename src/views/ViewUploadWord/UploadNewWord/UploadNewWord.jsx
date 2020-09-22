import React, { useRef } from "react"
import style from "./UploadNewWord.style"
import TextField from "src/components/atoms/TextField"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import ButtonUploadImages from "./TypeButtonOptions/ButtonUploadImages"
import ButtonOptionsUploadWord from "./TypeButtonOptions/ButtonOptionsUploadWord"
import Loading from "src/components/atoms/Loading/Loading"
import useUploadImageFiles from "src/hooks/useUploadWord/useUploadImageFiles"
import useUploadNewWord from "src/hooks/useUploadWord/useUploadNewWord"
import useLanguage from "src/hooks/useInternationalize/useLanguage"

const UploadNewWord = () => {
	const word = useRef();
	const { translate } = useLanguage("game.upload-words.change.field");
	const {  loadingUpload , uploadWord } = useUploadNewWord();
	const { selectImages, cancelUploadImages,previewImages,uploaded,images } = useUploadImageFiles();
	const handlerUploadWord = () => uploadWord({ letters : word.current.value, images });


	if(loadingUpload) return <Loading size={60} text="subiendo..." />

	return <>
		<TextField placeholder={translate()} styles={style.input}	ref={word} />
		{!uploaded ? (
			<ButtonUploadImages onChange={selectImages} />
		) : (
			<>
				<CircleImageSquare images={previewImages} styles={style.gridPreviewImages} />
				<ButtonOptionsUploadWord onUpload={handlerUploadWord} onCancel={cancelUploadImages}/>
			</>
		)}
	</>
}

export default UploadNewWord;
