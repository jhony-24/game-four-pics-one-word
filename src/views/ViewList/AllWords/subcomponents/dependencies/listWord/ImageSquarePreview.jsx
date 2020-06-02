import React, { Fragment } from "react";
import CircleImageSquare from "./node_modules/src/components/molecules/CircleImageSquare"
import Modal from "./node_modules/src/components/molecules/Modal/Modal";
import useToggle from "./node_modules/src/hooks/useToggle";
import LazyLoad from "./node_modules/src/components/hoc/LazyLoad";
import { lazy } from "react";
import { StyleSheet } from "aphrodite/no-important";

const ImageSquarePreviewModal = lazy(() => import("../../../dependencies/previewModal/ImageSquarePreviewModalwModal/ImageSquarePreviewModal"));

const selfStyle = new StyleSheet.create({
    circle: {
        marginRight: 5
    }
})

const ImageSquarePreview = ({ images, onClick }) => {
    const [state, setToggle] = useToggle();

    return (
        <Fragment>
            <CircleImageSquare
                onClick={setToggle}
                images={images}
                styles={selfStyle.circle} />
            <Modal
                visible={state}
                onClose={setToggle}
                title="vista previa"
                message={
                    <LazyLoad component={ImageSquarePreviewModal} onClick={onClick} images={images} />
                } />
        </Fragment>
    )
}

export default ImageSquarePreview;