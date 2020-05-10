import { StyleSheet } from "aphrodite/no-important"

const style = StyleSheet.create({
    card: {
        borderRadius: "0 0 2em 7em",
        boxShadow: "0 20px 30px rgba(0,0,0,.1)",
        marginBottom: "3em"
    },
    smallTitle: {
        width: "100%",
        textAlign: "center",
        padding: 10,
        fontSize: ".8em",
        userSelect: "none",
    },
    title: {
        fontSize: "1.3em",
        marginBottom: "3em",
        padding: 20,
        width: "80%",
        userSelect: "none",
    },
    titleStrong: {
        fontSize: "1.3em",
    },
    titleThink: {
        fontWeight: "lighter",
        fontSize: ".8em"
    },
    img: {
        marginRight: "1em",
        width: "5em",
        height: "5em",
    }
})

export default style;