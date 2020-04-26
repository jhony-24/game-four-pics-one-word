import { StyleSheet } from "aphrodite/no-important"
import { PRIMARY_COLOR } from "src/tools/constants";

const style = StyleSheet.create({
    ctnSwitch: {
        display: "block",
        position: "relative",
        width: "40px",
        height: "20px",
        borderRadius: 20,
        background: "rgba(0,0,0,.1)",
    },
    check: {
        height: "20px",
        width: "20px",
        borderRadius: "100%",
        transition: ".3s",
        position: "absolute",
        background: "gray",
    },
    input: {
        display: "none",
        ":checked + div": {
            transform : "translateX(100%)",
            background : PRIMARY_COLOR
        }
    }
})

export default style;