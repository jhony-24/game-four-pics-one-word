import React from "react"
import { SModalCardContainer } from "./Modal.style"
import PropTypes from "prop-types"
import ModalCompleteContainer from "./ModalPieces/ModalCompleteContainer"
import ModalDetail from "./ModalPieces/ModalDetail"
import ModalButtonCloser from "./ModalPieces/ModalButtonCloser"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import ModalTitle from "./ModalPieces/ModalTitle"

const Modal = ({ title, message, visible, onClose }) => {
	return (
		visible && (
			<ModalCompleteContainer>
				<SModalCardContainer>
					<SWrapperFlex>
						<ModalTitle>{title}</ModalTitle>
						<ModalButtonCloser onClose={onClose} />
					</SWrapperFlex>
					<ModalDetail>{message}</ModalDetail>
				</SModalCardContainer>
			</ModalCompleteContainer>
		)
	)
}

Modal.defaultProps = {
	title: "modal",
	message: "",
	visible: false,
	onClose: () => null,
}

Modal.propTypes = {
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	message: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.node,
	]),
	visible: PropTypes.bool,
	onClose: PropTypes.func,
}

export default Modal
