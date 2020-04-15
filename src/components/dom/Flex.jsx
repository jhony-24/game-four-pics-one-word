import React from "react"
import { css , StyleSheet } from "aphrodite/no-important"
import { styleDynamic } from "src/tools/functions"


const style = StyleSheet.create({
    flex : {
        display : "flex",
        alignItems : "center",
        justifyContent : "space-between",
        width : "100%"
    }
})



export default ({styles,children}) => { 
    return <div className={css(style.flex,styleDynamic(styles))}>{children}</div>
}