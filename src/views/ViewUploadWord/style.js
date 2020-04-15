import { StyleSheet } from "aphrodite/no-important"
import { PRIMARY_COLOR , TEXT_PRIMARY } from "src/tools/constants"


const style = StyleSheet.create({
    header : {
    },
    flex : {
        flexDirection : "column"
    },
    paragraph : {
        display : "flex",
        justifyContent : "center",
        textAlign : "center",
        fontSize : "1.3em",
        margin:"1em auto",
        width : "80%"
    },
    img : {
        width : "70%",
        margin : "20px 0"
    }
})



export default style;