import React from "react"
import { AiOutlineSync } from "react-icons/ai"
import Fade from "src/components/animations/Fade"
import { SErrorGetDataContainer, SErrorTitle, SLinkReloadButton, SLinkReloadTextButton } from "./AllWordPieces.style"
import SLabelWrapper from "src/components/styled/labels/SLabelWrapper"
import SLabelBlock from "src/components/styled/labels/SLabelBlock"
import useLanguage from "src/hooks/useInternationalize/useLanguage"
import { clientWindow } from "src/resources/tools/functions"

const ErrorGetData = () => {
	const { translate: error } = useLanguage("game.list-words.error.");
	const { translate : reload } = useLanguage("game.common.reload");
	return (
		<SErrorGetDataContainer>
			<Fade type="in">
				<SErrorTitle>{error("title")}</SErrorTitle>
				<SLabelBlock>
					<SLabelWrapper $color="color_smooth_darker">{error("message")}</SLabelWrapper>
				</SLabelBlock>
				<SLinkReloadButton href={clientWindow().location}>
					<SLinkReloadTextButton>{reload()}</SLinkReloadTextButton>
					<AiOutlineSync size={20} />
				</SLinkReloadButton>
			</Fade>
		</SErrorGetDataContainer>
	)
}

export default ErrorGetData
