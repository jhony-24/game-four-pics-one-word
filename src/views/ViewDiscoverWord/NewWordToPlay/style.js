import { StyleSheet } from "aphrodite/no-important"
import { SILVER_COLOR, TEXT_DARK } from "src/resources/tools/constants";

const style = StyleSheet.create({
    button : {
        width : "100%",
        margin : "2em 2em",
        background : SILVER_COLOR,
        color : TEXT_DARK
    },
    buttonFlexCenter : {
        justifyContent : "center"
    }
});

export default style;