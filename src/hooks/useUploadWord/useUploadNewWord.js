import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { wordActions } from "src/redux/word"

const useUploadNewWord = () => {
	const dispatch = useDispatch();
	const loadingUpload = useSelector(state => state.word.loadingUpload,shallowEqual);
	const uploadWord = parameters => dispatch(wordActions.uploadNewWord(parameters));

	return {
		uploadWord,
		loadingUpload
	}
}

export default useUploadNewWord
