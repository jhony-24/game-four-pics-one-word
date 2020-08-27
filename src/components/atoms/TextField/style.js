import { StyleSheet } from "aphrodite/no-important"
import {  TEXT_SECONDARY } from "src/theme";


const style = StyleSheet.create({
    flex : {
        padding : 15,
        borderRadius : "20px",
    } ,
    input : {
        width : "100%",
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