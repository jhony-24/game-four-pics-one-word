import React from "react"
import RowItem from "src/components/molecules/RowItem"
import ButtonBack from "src/components/molecules/ButtonBack"
import UploadNewWord from "./UploadNewWord"
import LandingUpload from "./ViewUploadPieces/LandingUpload"
import style, { SFlexBody } from "./ViewUploadPieces/ViewUploadPieces.style"

const ViewUploadWord = () => {
	return (
		<div className="v-upload">
			<RowItem styles={style.header} leftBody={<ButtonBack />} />
			<SFlexBody>
				<LandingUpload />
				<UploadNewWord />
			</SFlexBody>
		</div>
	)
}

export default ViewUploadWord
