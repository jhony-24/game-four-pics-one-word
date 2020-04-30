import { StyleSheet } from "aphrodite/no-important"

const style = StyleSheet.create({
    containerImagesCircle: {
        overflow: "hidden",
        borderRadius: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gridTemplateRows: "auto",
        gridGap: 2,
        width: "45px",
        height: "45px"
    },
    bgImg: {
        backgroundSize: "cover, 20px ",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(100,100,100,.1)"
    },
    container: {
        position: "relative"
    }
})

export default style;