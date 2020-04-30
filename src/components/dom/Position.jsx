import React from "react"
import Flex from "./Flex";

export default ({ position, margin, left, right, top, bottom, children, styles }) => {
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
        <Flex styles={{ ...style, ...styles }} >
            {children}
        </Flex>
    )
}