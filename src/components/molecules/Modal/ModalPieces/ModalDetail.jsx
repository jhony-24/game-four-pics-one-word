import React from "react"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import Paragraph from "../../Paragraph/Paragraph"

export default function ModalDetail({ children }) {
	return (
		<SWrapperFlex>
			<Paragraph detail={children} colordetail="rgb(80,80,80)" />
		</SWrapperFlex>
	)
}
