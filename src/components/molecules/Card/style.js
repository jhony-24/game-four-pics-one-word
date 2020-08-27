import { StyleSheet } from "aphrodite/no-important"
import { PRIMARY_COLOR, TEXT_PRIMARY } from "src/theme";

const style = StyleSheet.create({
    card : {
        background : PRIMARY_COLOR,
        color : TEXT_PRIMARY,
        boxShadow : "0 10px 20px rgba(100,100,100,.1)"
    }
})

export default style;