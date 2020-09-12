import React, { useCallback, memo } from "react"
import { useDispatch } from "react-redux"
import { wordActions } from "src/redux/word"
import SWrapperCentered from "src/components/styled/wrappers/SWrapperCentered"
import SButtonPrimaryOutlined from "src/components/styled/buttons/SButtonPrimaryOutlined"

const ButtonLoadMoreWords = () => {
	const dispatch = useDispatch()
	const getListAllWords = useCallback(()=>dispatch(wordActions.getListAllWords()), [
		dispatch,
	])
	return (
		<SWrapperCentered>
			<SButtonPrimaryOutlined
				onClick={getListAllWords}
				onKeyUp={getListAllWords}
				>
				Ver más
			</SButtonPrimaryOutlined>
		</SWrapperCentered>
	)
}

export default memo(ButtonLoadMoreWords)
