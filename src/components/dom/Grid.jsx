import React from "react"
import { css , StyleSheet } from "aphrodite/no-important"
import { styleDynamic } from "src/tools/functions"



const style = StyleSheet.create({
    grid : {
        display : "grid",
        gridTemplateColumns : "repeat(auto-fill,minmax(30px,1fr))",
        gridGap : 10,
        margin : "auto",
    }
})



export default ({width,spacing,children,verticalMargin}) => { 

    let styles = {
        gridGap : spacing || 10,
        width : width,
        margin : `${verticalMargin || 0}px auto`
    }

    return(
    <div className={css(style.grid,styleDynamic(styles))}>
        {children}
    </div>
    )

}
