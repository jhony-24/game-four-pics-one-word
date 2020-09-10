import { takeEvery, put, select } from "redux-saga/effects"
import actions from "./actions"
import Auth from "src/models/auth"
import ReaderWordsService from "src/services/ReaderWordsService"
import UploadNewWordService from "src/services/UploadNewWordService"

function* requestListAllWords() {
	const start = yield select(state => state.word.pagination.start)
	yield put(actions.loadingListAllWords());

	try {
		const { content, nextLink, status } = yield ReaderWordsService().getListAllWords({ start, limit: 3 });
		if(status){
			yield put(actions.getListAllWordsComplete({
				listWords: content,
				loading: false,
				error: false,
				pagination: {
					start: nextLink,
				},
			}))
		}
	} catch {
		yield put(actions.errorToGetData());
	}

}

function* requestUploadNewWord({payload}) {
	const { letters, images } = payload;
	const user = Auth.get();
	yield put(actions.loadingUploadNewWord({loadingUpload:true}));
	try {
		const { status } = yield UploadNewWordService().uploadImages({images}).then(({data : images}) => {
			let wordUpload = UploadNewWordService().uploadNewWord({
				iduser: user.iduser,
				letters,
				images,
				points: 0,
				dateCreated: new Date().toLocaleString(),
			});
			return wordUpload;
		});
		yield put(actions.uploadNewWordComplete({loadingUpload:false,uploaded:status}));
	} catch {
		yield put(actions.loadingUploadNewWord({loadingUpload:false}));
	}
}


export default function* watchWords() {
	yield takeEvery(actions.getListAllWords.toString(), requestListAllWords)
	yield takeEvery(actions.uploadNewWord.toString(), requestUploadNewWord)
}
