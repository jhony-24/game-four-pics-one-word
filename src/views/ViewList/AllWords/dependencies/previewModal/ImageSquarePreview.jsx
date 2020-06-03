import React, { Fragment } from "react";
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import Modal from "src/components/molecules/Modal/Modal";
import useToggle from "src/hooks/useToggle";
import LazyLoad from "src/components/hoc/LazyLoad";
import { lazy } from "react";
import { StyleSheet } from "aphrodite/no-important";

const ImageSquarePreviewModal = lazy(() => import("./ImageSquarePreviewModal"));

const selfStyle = new StyleSheet.create({
    circle: {
        marginRight: 5
    }
})

const ImageSquarePreview = ({ images, onClick }) => {
    const [isVisible, setToggle] = useToggle();

    return (
        <Fragment>
            <CircleImageSquare
                onClick={setToggle}
                images={images}
                styles={selfStyle.circle} />
            <Modal
                visible={isVisible}
                onClose={setToggle}
                title="vista previa"
                message={
                    <LazyLoad component={ImageSquarePreviewModal} onClick={onClick} images={images} />
                } />
        </Fragment>
    )
}

export default ImageSquarePreview;