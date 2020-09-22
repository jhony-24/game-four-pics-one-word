import React from "react"
import StarPointsDiscovered from "./StarPointsDiscovered"
import ButtonBack from "src/components/molecules/ButtonBack"
import RowItem from "src/components/molecules/RowItem"
import { css, StyleSheet } from "aphrodite/no-important"
import { PRIMARY_COLOR, TEXT_PRIMARY } from "src/theme"
import useLanguage from "src/hooks/useInternationalize/useLanguage"

const HeaderDiscoverWord = () => {
	const { translate } = useLanguage("game.preview.header.title");
	return (
		<RowItem
			styles={style.header}
			leftBody={<ButtonBack color="white" />}
			centerBody={<p className={css(style.textHeader)}>{translate()}</p>}
			rightBody={<StarPointsDiscovered />}
		/>
	)
}

const style = StyleSheet.create({
	header: {
		background: PRIMARY_COLOR,
		":hover": false,
	},
	textHeader: {
		color: TEXT_PRIMARY,
		textAlign: "center",
		userSelect: "none",
	},
	flexDiscover: {
		width: "90%",
		margin: "1em auto",
		display: "block",
	},
	motive: {
		fontSize: ".7em",
		margin: "3em 0 2em",
		color: "gray",
	},
	squareImage: {
		borderRadius: 10,
		width: "90%",
		margin: "2em auto",
		height: 250,
	},
})

export default HeaderDiscoverWord
