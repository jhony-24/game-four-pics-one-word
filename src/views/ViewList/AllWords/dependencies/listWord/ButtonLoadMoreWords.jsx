import React, { memo, useCallback } from "react"
import { StyleSheet, css } from "aphrodite/no-important"
import { useDispatch } from "react-redux"
import { wordActions } from "src/redux/word"
import { TEXT_SECONDARY } from "src/theme"

const style = new StyleSheet.create({
	container: {
		textAlign: "center",
	},
	loadMore: {
		margin: "1em auto 3em",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "10px 20px",
		fontSize: "12px",
		borderRadius: "10px",
		fontWeight: "bold",
		color: TEXT_SECONDARY,
		border: "2px solid " + TEXT_SECONDARY,
	},
})

const ButtonLoadMoreWords = () => {
	const dispatch = useDispatch()
	const getListAllWords = useCallback(dispatch(wordActions.getListAllWords()), [
		dispatch,
	])
	return (
		<div className={css(style.container)}>
			<div
				onClick={getListAllWords}
				onKeyUp={getListAllWords}
				className={css(style.loadMore)}
				role="button"
				tabIndex="0"
			>
				Ver más
			</div>
		</div>
	)
}

export default memo(ButtonLoadMoreWords)
