import { StyleSheet } from "aphrodite/no-important"
import { PRIMARY_COLOR , TEXT_PRIMARY } from "src/tools/constants"


const style = StyleSheet.create({
    header : {
        background : PRIMARY_COLOR,
        ':hover' : false
    },
    textHeader : {
        color : TEXT_PRIMARY
    },
    squareImage : {
        borderRadius : 10,
        width : "90%",
        margin : "2em auto",
        height : 250,
    }
})



export default style; 