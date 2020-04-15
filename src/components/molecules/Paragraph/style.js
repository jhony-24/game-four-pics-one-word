import { StyleSheet } from "aphrodite/no-important"


const style = StyleSheet.create({
    flex : {
        flexDirection : "column",
        alignItems : "none",
    },
    title : {
        fontWeight : "bold",
        color : "rgb(30,30,30)",
        fontSize : ".9em",
        wordBreak : "break-word"
    },
    detail  :{
        fontSize : ".72em",
        marginTop : "3px",
        color : "gray",
        lineHeight : "18px"
    }
})



export default style;