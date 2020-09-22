import React, { useEffect } from "react"
import { connect } from "react-redux"
import { wordActions, wordSelectors } from "src/redux/word"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import NewWordButtonGenerator from "./ButtonPlay/NewWordButtonGenerator"
import { discoverActions } from "src/redux/discover"
import store from "src/store/store"
import SWrapperFlex from "src/components/styled/wrappers/SWrapperFlex"
import useLanguage from "src/hooks/useInternationalize/useLanguage"

const NewWordToPlay = ({ onDefineCurrentIndex, onBackward, onForward }) => {
	const { translate } = useLanguage("common.navigation.");
	useEffect(() => {
		onDefineCurrentIndex();
	},[onDefineCurrentIndex]);

	return (
		<SWrapperFlex>
			<NewWordButtonGenerator onClick={onBackward}>
				<IoIosArrowBack /> {translate("prev")}
			</NewWordButtonGenerator>
			<NewWordButtonGenerator onClick={onForward}>
				{translate("next")} <IoIosArrowForward />
			</NewWordButtonGenerator>
		</SWrapperFlex>
	)
}

const mapDispatch = dispatch => {
	const onMoveTo = action => {
		dispatch(action)
		dispatch(discoverActions.createLettersToDiscover(
			store.getState().word.listWords[ store.getState().word.currentIndexListWord ]
		))
	}
	const onDefineCurrentIndex = () => {
		dispatch(wordActions.setDefaultIndexWordPlay( 
			wordSelectors.getCurrentIndexWord(store.getState()) 
		))
	}
	return {
		onForward: () => onMoveTo(wordActions.forwardNewWordPlay()),
		onBackward: () => onMoveTo(wordActions.backwardNewWordPlay()),
		onDefineCurrentIndex,
	}
}
export default connect(null, mapDispatch)(NewWordToPlay)
