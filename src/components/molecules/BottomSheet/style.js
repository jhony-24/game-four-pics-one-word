import { StyleSheet } from "aphrodite/no-important"
import { TEXT_PRIMARY } from "src/resources/tools/constants";

const style = StyleSheet.create({
    card: {
        width: "350px",
        background: TEXT_PRIMARY,
        boxShadow: "0 0 20px rgba(0,0,0,.1)",
        borderRadius: "10px 10px 0 0",
    },
    flexContainer: {
        flexDirection: "column",
        justifyContent: "center",
    },
    center: {
        textAlign: "center"
    },
    header: {
        padding: "20px 0 15px",
        borderBottom: "1px solid rgba(0,0,0,.1)",
        position: "relative",
    },
    bar: {
        width: "40px",
        height: "2px",
        borderRadius : "40px",
        background: "silver",
        margin : "0 auto 10px"
    },
    body: {
        padding: "15px"
    }
})

export default style;