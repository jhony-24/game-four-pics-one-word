import React , { Fragment } from 'react'
import style from "../../style";
import Text from "src/components/atoms/Text"
import Button from "src/components/atoms/Button/Button";
import Fade from "src/components/dom/Fade";
import { IoIosArrowForward } from "react-icons/io";
import Flex from "src/components/dom/Flex";
import CircleImageSquare from 'src/components/molecules/CircleImageSquare';

const ImageSquarePreviewModal = ({images,onClick}) => {
    return (
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
    )
}

export default ImageSquarePreviewModal;