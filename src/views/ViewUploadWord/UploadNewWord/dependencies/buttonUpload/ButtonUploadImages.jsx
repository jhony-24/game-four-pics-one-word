import React from "react";
import style from "../../style";
import { IoIosAdd } from "react-icons/io"
import FloatingButton from "src/components/atoms/FloatingButton"

const ButtonUploadImages = ({ onChange }) => (
    <FloatingButton styles={style.uploadImages}>
        <IoIosAdd size={30} />
        <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            multiple
            onChange={onChange} />
    </FloatingButton>
)

export default ButtonUploadImages;