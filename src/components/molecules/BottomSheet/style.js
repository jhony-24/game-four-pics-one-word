import { StyleSheet } from "aphrodite/no-important"
import { TEXT_PRIMARY } from "src/tools/constants";

const style = StyleSheet.create({
    card: {
        width: "100%",
        background : TEXT_PRIMARY,
        boxShadow : "0 0 20px rgba(0,0,0,.1)",
        borderRadius : "10px 10px 0 0"
    },
    flexContainer : {
        flexDirection : "column",
        justifyContent :"center",
    },
    center : {
        textAlign : "center"
    },
    header : {
        padding : "20px 0 15px",
        borderBottom : "1px solid rgba(0,0,0,.1)",
        position : "relative",
        "::after" : {
            content : "",
            width : "40px",
            height : "2px",
            background : "silver",
            top : 0,
            left : 0,
            position : "absolute",
            display : "block"
        }
    },
    body : {
        padding : "15px"
    }
})

export default style;