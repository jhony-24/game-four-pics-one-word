import { StyleSheet } from "aphrodite/no-important"

const style = StyleSheet.create({
    header : {
        ":hover":false
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