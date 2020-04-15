import { StyleSheet } from "aphrodite/no-important"
import { PRIMARY_COLOR  } from "../../../tools/constants";


const rotateKeyFrames = {
    '0%' : {
        transform : "rotate(-360deg)"
    }
}

const style = StyleSheet.create({
    flex : {
        flexDirection:"column",
    },
    loading : {
        width : "30px",
        height : "30px",
        borderRadius : "100%",
        border : "2px solid transparent",
        animationName : [ rotateKeyFrames ],
        animationDuration : ".5s",
        animationIterationCount : "infinite",
        animationTimingFunction : "linear",
    },
    textLoading : {
        margin : "8px auto",
        fontSize : ".72em"
    }
})



export default style;