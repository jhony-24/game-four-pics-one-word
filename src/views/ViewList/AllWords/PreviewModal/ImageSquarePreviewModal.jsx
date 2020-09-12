import React, { Fragment } from "react"
import Button from "src/components/atoms/Button/Button"
import Fade from "src/components/animations/Fade"
import { IoIosArrowForward } from "react-icons/io"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import { css } from "aphrodite/no-important"
import SLabelWrapper from "src/components/styled/labels/SLabelWrapper"
import style from "./PreviewModal.style"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"

const ImageSquarePreviewModal = ({ images, onClick }) => {
	return (
		<Fragment>
			<Fade>
				<CircleImageSquare images={images} styles={style.gridImagesModal} />
			</Fade>
			<Button onClick={onClick}>
				<SWrapperFlex className={css(style.justify)}>
					<SLabelWrapper>ir ahora</SLabelWrapper>
					<IoIosArrowForward size={20} />
				</SWrapperFlex>
			</Button>
		</Fragment>
	)
}

export default ImageSquarePreviewModal
