import { StyleSheet } from "aphrodite/no-important"
import { PRIMARY_COLOR , TEXT_PRIMARY } from "src/resources/tools/constants";


const style = StyleSheet.create({
    floatingBtn : {
        display : "flex",
        justifyContent :"center",
        alignItems : "center",
        borderRadius : "100%",
        boxShadow : "0 10px 20px rgba(100,100,100,.3)",
        width : "60px",
        height : "60px",
        position :"fixed",
        zIndex : 100,
        bottom : 0,
        right : 0,
        margin : "20px",
        background : PRIMARY_COLOR,
        color : TEXT_PRIMARY
    },
    label : {
        display: "inline",
        lineHeight : 0
    }
})



export default style;