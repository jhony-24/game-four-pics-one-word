import React from "react"
import { AiOutlineSync } from "react-icons/ai"
import Fade from "src/components/animations/Fade"
import { SErrorGetDataContainer, SErrorTitle, SLinkReloadButton, SLinkReloadTextButton } from "./AllWordPieces.style"
import SLabelWrapper from "src/components/styled/labels/SLabelWrapper"
import SLabelBlock from "src/components/styled/labels/SLabelBlock"

const ErrorGetData = () => {
	return (
		<SErrorGetDataContainer>
			<Fade type="in">
				<SErrorTitle>Ups! An error has occurred</SErrorTitle>
				<SLabelBlock>
					<SLabelWrapper $color="color_smooth_darker">the data was not obtained correctly</SLabelWrapper>
				</SLabelBlock>
				<SLinkReloadButton href={window.location}>
					<SLinkReloadTextButton>Reload</SLinkReloadTextButton>
					<AiOutlineSync size={20} />
				</SLinkReloadButton>
			</Fade>
		</SErrorGetDataContainer>
	)
}

export default ErrorGetData
