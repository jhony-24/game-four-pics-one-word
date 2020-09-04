import React from 'react'
import { StyleSheet, css } from "aphrodite/no-important"

const HeaderTitleMessage = () => {
    return (
        <h1 className={css(style.title)}>
            <span className={css(style.titleStrong)}>Bienvenido</span>
            <span className={css(style.titleThink)}>, es hora de comenzar a jugar</span>
        </h1>
    )
}

const style = new StyleSheet.create({
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
});

export default HeaderTitleMessage;