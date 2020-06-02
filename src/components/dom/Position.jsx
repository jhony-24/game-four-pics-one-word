import React from "react"
import Flex from "./Flex";
import { StyleSheet } from "aphrodite/no-important";

export default ({ position, margin, left, right, top, bottom, children, styles }) => {
    const selfStyle = new StyleSheet.create({
        flex: {
            position,
            margin,
            left,
            right,
            top,
            bottom,
            justifyContent: "center"
        }
    });

    return (
        <Flex styles={[selfStyle.flex, styles]} >
            {children}
        </Flex>
    )
}