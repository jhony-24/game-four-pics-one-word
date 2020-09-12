import React from "react"
import { IoIosClose } from "react-icons/io"

export default function ModalButtonCloser({ onClose }) {
	return (
		<span onClick={onClose} onKeyDown={onClose} role="button" tabIndex="0">
			<IoIosClose size={25} />
		</span>
	)
}
