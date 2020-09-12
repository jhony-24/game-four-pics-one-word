import React from "react"
import style, { SFlexBody, SImageCallAction } from "./ViewUploadWord.style"
import imageUpload from "../../../images/image_upload.svg"
import RowItem from "src/components/molecules/RowItem"
import Paragrah from "src/components/molecules/Paragraph"
import ButtonBack from "src/components/molecules/ButtonBack"
import UploadNewWord from "./UploadNewWord"

const ViewUploadWord = () => {
	return (
		<div className="v-upload">
			<RowItem styles={style.header} leftBody={<ButtonBack />} />
			<SFlexBody>
				<SImageCallAction src={imageUpload} alt={imageUpload} />
				<Paragrah
					styles={style.paragraph}
					title="Subir imagenes"
					detail="te recomendamos que las imagenes estén relacionados con la palabra"
					colordetail="gray"
				/>
				<UploadNewWord />
			</SFlexBody>
		</div>
	)
}

export default ViewUploadWord
