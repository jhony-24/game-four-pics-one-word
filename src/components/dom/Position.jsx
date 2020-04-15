import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { styleDynamic } from "src/tools/functions"
import Flex from "./Flex";

export default ({ position, margin, left, right, top, bottom, children }) => {

    const style = {
            position,
            margin,
            left,
            right,
            top,
            bottom,
            justifyContent : "center"
    };

    return (
        <Flex styles={style} >
                {children}
        </Flex>
    )
}