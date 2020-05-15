import React, { Fragment } from "react";
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import Modal from "src/components/molecules/Modal/Modal";
import useToggle from "src/hooks/useToggle";
import LazyLoad from "src/components/hoc/LazyLoad";
import { lazy } from "react";

const ImageSquarePreviewModal = lazy(() => import("./dependencies/ImageSquarePreviewModal"));

const ImageSquarePreview = ({ images, onClick }) => {
    const [state, setToggle] = useToggle();

    return (
        <Fragment>
            <CircleImageSquare
                onClick={setToggle}
                images={images}
                styles={{ marginRight: 5 }} />
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