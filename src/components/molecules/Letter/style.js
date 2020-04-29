import { StyleSheet } from "aphrodite/no-important"

const style = StyleSheet.create({
    f : {
        justifyContent : "center",
        width : "auto",
        padding : 5,
        borderRadius : 5,
        boxShadow : "0 1px 1px rgba(0,0,0,.1)",
        transition : "background .3s, transform .2s",
        userSelect : "none",
        ':active' : {
            opacity : .7
        }
    },
    letter : {
        textTransform : "uppercase"
    }
})


export default style;