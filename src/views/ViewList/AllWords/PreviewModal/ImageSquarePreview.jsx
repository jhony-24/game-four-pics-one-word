import React, { Fragment } from "react"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import Modal from "src/components/molecules/Modal/Modal"
import useToggle from "src/hooks/useInterfaceControls/useToggle"
import LazyLoad from "src/components/hoc/LazyLoad"
import { lazy } from "react"
import { StyleSheet } from "aphrodite/no-important"
import useLanguage from "src/hooks/useInternationalize/useLanguage"

const ImageSquarePreviewModal = lazy(() => import("./ImageSquarePreviewModal"))

const selfStyle = new StyleSheet.create({
	circle: {
		marginRight: 5,
	},
})

const ImageSquarePreview = ({ images, onClick }) => {
	const { translate } = useLanguage("game.list-words.modal.title");
	const [isVisible, setToggle] = useToggle()

	return (
		<Fragment>
			<CircleImageSquare onClick={setToggle} images={images} styles={selfStyle.circle} />
			<Modal
				visible={isVisible}
				onClose={setToggle}
				title={translate()}
				message={
					<LazyLoad component={ImageSquarePreviewModal} onClick={onClick} images={images} />
				}
			/>
		</Fragment>
	)
}

export default ImageSquarePreview
