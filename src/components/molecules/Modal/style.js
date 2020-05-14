import { StyleSheet } from "aphrodite/no-important"
import { TEXT_PRIMARY } from "src/resources/tools/constants"

const style = StyleSheet.create({
    backdrop: {
        zIndex: 1000,
        position: "fixed"
    },
    modalCtn: {
        justifyContent: "center",
        background: "rgba(0,0,0,.6)",
        height: "100%"
    },
    modal: {
        background: TEXT_PRIMARY,
        width: "90%",
        padding: 10,
        borderRadius: 20,
        boxShadow: "0 10px 20px rgba(0,0,0,.1)",
        "@media screen and (min-width:400px)": {
            width: "400px",
        }
    }
})

export default style;