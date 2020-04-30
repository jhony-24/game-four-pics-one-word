import { StyleSheet } from "aphrodite/no-important"
import { PRIMARY_COLOR, TEXT_PRIMARY, TEXT_SECONDARY } from "../../../tools/constants";


const style = StyleSheet.create({
    flex : {
        padding : 15,
        borderRadius : "20px",
    } ,
    input : {
        width : "100%",
        "::selection" : {
            background : PRIMARY_COLOR,
            color : TEXT_PRIMARY
        },
        ":hover" : {
            color : TEXT_SECONDARY
        }
    },
    icon : {
        lineHeight : 0,
        marginRight : 10,
    }
})



export default style;