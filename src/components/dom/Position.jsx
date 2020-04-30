import React from "react"
import Flex from "./Flex";

export default ({ position, margin, left, right, top, bottom, children }) => {
    const style = {
        position,
        margin,
        left,
        right,
        top,
        bottom,
        justifyContent: "center"
    };

    return (
        <Flex styles={style} >
            {children}
        </Flex>
    )
}