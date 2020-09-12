import React, { useEffect } from "react"
import { connect } from "react-redux"
import FlatMessage from "src/components/molecules/FlatMessage"
import MessUpLetters from "./ModifyLetters/MessUpLetters.sub"
import TestLetters from "./ModifyLetters/TestLetters.sub"
import GameSuccess from "./MessageSuccess/GameSuccess"
import style, { SFlexContainerPreview } from "./DiscoverWord.style"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import { discoverActions, discoverSelectors } from "src/redux/discover"
import { userSelectors } from "src/redux/user"

const DiscoverWord = ({ createLetters, state, ...restProps }) => {
	const { stateDiscover, images, idWord, idUser } = restProps
	useEffect(() => {
		createLetters(state)
	}, [createLetters,state])

	if (stateDiscover) {
		return <GameSuccess idWord={idWord} idUser={idUser} />
	} else {
		return (
			<SFlexContainerPreview>
				<CircleImageSquare images={images} styles={style.squareImage} />
				<TestLetters />
				<FlatMessage verticalMargin={25} text="Elige las letras correctas y descubre la palabra" />
				<MessUpLetters />
			</SFlexContainerPreview>
		)
	}
}

const mapState = state => ({
	stateDiscover: state.discover.stateDiscover,
	idWord: discoverSelectors.getWordId(state),
	idUser: userSelectors.getUserId(state),
	images: state.discover.wordData !== null ? state.discover.wordData.images : [],
})
const mapDispatch = { createLetters: discoverActions.createLettersToDiscover }

export default connect(mapState, mapDispatch)(DiscoverWord)
