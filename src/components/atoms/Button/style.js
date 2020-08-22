import { StyleSheet } from "aphrodite/no-important"
import { PRIMARY_COLOR , TEXT_PRIMARY } from "src/theme/constants";

const style = StyleSheet.create({
    btn : {
        borderRadius : "20px",
        padding : "12px",
        width : "100%",
        transition : ".2s",
        fontSize : "12px",
        textAlign : "center",
        boxShadow : '0 15px 20px rgba(100,100,100,.3)',
        background : PRIMARY_COLOR,
        color : TEXT_PRIMARY,
        ':hover' : {
            opacity : .9
        }
    },
    dContent : {
        display : "block"
    }
})



export default style;