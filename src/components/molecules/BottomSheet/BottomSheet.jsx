import React, { useState, useEffect } from "react"
import { SBody, SCardBottomSheet, SCardBottomSheetBarDraggable, SCardBottomSheetHeader, SFlexBody, SCardBottomPosition } from "./BottomSheet.style"
import Text from "src/components/atoms/Text"
import { AnimatePresence } from "framer-motion"
import SWrapperBackdrop from "src/components/styled/wrappers/SWrapperBackdrop"

const animations = {
	close: { y: "100%", transition: { type: "tween", duration: 0.1 } },
	open: { y: 0 },
}

const BottomSheet = ({ open, title, children, onClose }) => {
	const [isOpen, setOpen] = useState(open)
	useEffect(() => {
		setOpen(open)
	}, [open])

	const onPanStart = (event, info) => setOpen(false)
	const onDragExit = () => onClose(isOpen)

	return (
		<AnimatePresence onExitComplete={onDragExit}>
			{isOpen && (
				<SWrapperBackdrop>
					<SCardBottomPosition>
							<SCardBottomSheet
							variants={animations}
							initial="close"
							animate="open"
							drag="y"
							dragElastic={0}
							dragConstraints={{ top: 0 }}
							onPanStart={onPanStart}
							exit="close"
							>
								<SFlexBody>
									<SCardBottomSheetHeader>
										<SCardBottomSheetBarDraggable/>
										<Text>{title}</Text>
									</SCardBottomSheetHeader>
									<SBody>{children}</SBody>
								</SFlexBody>
							</SCardBottomSheet>
					</SCardBottomPosition>
				</SWrapperBackdrop>
			)}
		</AnimatePresence>
	)
}

export default BottomSheet
