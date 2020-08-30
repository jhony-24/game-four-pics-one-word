import { StyleSheet } from "aphrodite/no-important"
import styled from "src/theme/styled";

export default StyleSheet.create({
    f: {
        justifyContent: "none",
        alignItems: "stretch",
        flexDirection: "column",
        width: "90%",
        margin: "1em auto",
    },
    fr: {
        width: "auto",
    },
})

export const SSkeletonRow = styled("span",{
	display: "flex",
	padding: "20px 0",
	alignItems: "center",
})