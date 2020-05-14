import React, { Fragment } from "react";
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import Text from "src/components/atoms/Text"
import Modal from "src/components/molecules/Modal/Modal";
import useToggle from "src/hooks/useToggle";
import style from "../style";
import Button from "src/components/atoms/Button/Button";
import Fade from "src/components/dom/Fade";
import { IoIosArrowForward } from "react-icons/io";
import Flex from "src/components/dom/Flex";

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
                    <Fragment>
                        <Fade>
                            <CircleImageSquare images={images} styles={style.gridImagesModal._definition} />
                        </Fade>
                        <Button onClick={onClick} >
                            <Flex styles={{ justifyContent: "center" }}>
                                <Text>ir ahora </Text>
                                <IoIosArrowForward size={20} />
                            </Flex>
                        </Button>
                    </Fragment>
                } />
        </Fragment>
    )
}

export default ImageSquarePreview;