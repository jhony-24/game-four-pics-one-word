import { StyleSheet } from "aphrodite/no-important"
import { TEXT_PRIMARY } from "src/tools/constants"


const style = StyleSheet.create({
    card : {
        clipPath : "ellipse(100% 100% at 50% 0%)",
    },  
    title : {
        margin : "auto",
        paddingTop : 10,
        width : "90%",
        fontSize : "1.2em",
    },  
    container : {
        margin : "auto",
        width : "90%",
    },
    circleImage : {
        border : `2px solid ${TEXT_PRIMARY}`,
        marginBottom : 5,
        gridGap : 0,
    },
    rankHigh : {
        width : "65px",
        height : "65px",
    },    
    flexCtnImg : {
        width : "auto",
        margin : "1em",
        flexDirection : "column",
    },
    textRank : {
        fontSize : ".7em",
        marginTop : 5 ,
    }
})



export default style;