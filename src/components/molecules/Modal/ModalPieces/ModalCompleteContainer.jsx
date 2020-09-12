import React from "react"
import { Portal } from "react-portal"
import Fade from "src/components/animations/Fade"
import SWrapperFixedFullScreen from "src/components/styled/wrappers/SWrapperFixedFullScreen"
import { SModalBackdrop, SModalContainer } from "../Modal.style"

export default function ModalCompleteContainer({ children }) {
	return (
		<Portal>
			<SModalBackdrop>
				<Fade type="in">
					<SWrapperFixedFullScreen>
						<SModalContainer>{children}</SModalContainer>
					</SWrapperFixedFullScreen>
				</Fade>
			</SModalBackdrop>
		</Portal>
	)
}
