import { StyleSheet } from "aphrodite/no-important"

const style = StyleSheet.create({
    uploadImages : {
        position : "static"
    },
    gridPreviewImages : {
        borderRadius : 10,
        gridTemplateColumns : "repeat(4,1fr)",
        width : 200,
        margin : "1em auto"
    },  
    input : {
        border : "1px solid silver",
        width : "80%",
        margin : 10
    },
    btnUploadWord : {
        width : "90%",
        marginTop : 10
    },
    btnUploadCancel : {
        width : "90%",
        marginTop : 20,
        marginBottom : 20,
        boxShadow  : "none",
        background : "inherit",
        color : "gray"
    }
})

export default style;