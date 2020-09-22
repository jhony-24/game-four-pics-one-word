import React from "react"
import imageUpload from "../../../../images/image_upload.svg"
import Paragrah from "src/components/molecules/Paragraph"
import style, { SImageCallAction } from "./ViewUploadPieces.style"
import useLanguage from "src/hooks/useInternationalize/useLanguage"

const LandingUpload = () => {
	const { translate } = useLanguage("game.upload-words.landing.")
	return (
		<>
			<SImageCallAction src={imageUpload} alt={imageUpload} />
			<Paragrah
				styles={style.paragraph}
				title={translate("title")}
				detail={translate("message")}
				colordetail="gray"
			/>
		</>
	)
}

export default LandingUpload
