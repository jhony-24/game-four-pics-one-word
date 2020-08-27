import { StyleSheet } from "aphrodite/no-important"
import { PRIMARY_COLOR , TEXT_PRIMARY } from "src/theme"

const style = StyleSheet.create({
    header : {
        background : PRIMARY_COLOR,
        ':hover' : false
    },
    textHeader : {
        color : TEXT_PRIMARY,
        textAlign : "center",
        userSelect: "none",
    },
})

export default style; 