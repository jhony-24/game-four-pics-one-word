import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"

const style = StyleSheet.create({
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(30px,1fr))",
        gridGap: 10,
        margin: "auto",
    }
})

export default ({ width, spacing, children, verticalMargin }) => {
    const selfStyle = new StyleSheet.create({
        grid: {
            gridGap: spacing || 10,
            width: width,
            margin: `${verticalMargin || 0}px auto`
        }
    });

    return (
        <div className={css(style.grid, selfStyle.grid)}>
            {children}
        </div>
    )
}
