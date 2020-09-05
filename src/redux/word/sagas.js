import { takeEvery, put, select } from "redux-saga/effects"
import actions from "./actions"
import services from "src/services"
import Auth from "src/models/auth"

function* requestListAllWords() {
	const start = yield select(state => state.word.pagination.start)
	yield put(actions.loadingListAllWords());

	try {
		const request = yield services.getListAllWords({ start, limit: 3 })
		yield put(
			actions.getListAllWordsComplete({
				listWords: request.content,
				loading: false,
				error: false,
				pagination: {
					start: request.nextLink,
				},
			})
		)
	} catch (e) {
		yield put(actions.errorToGetData());
	}

}

function* requestUploadNewWord({payload}) {
	const { letters, images } = payload;
	const user = Auth.get();
	yield put(actions.loadingUploadNewWord({loadingUpload:true}));
	try {
		const {status} = yield services.uploadImages({images}).then(({data : images}) => {
			let wordUpload = services.uploadNewWord({
				iduser: user.iduser,
				letters,
				images,
				points: 0,
				dateCreated: new Date().toLocaleString(),
			});
			return wordUpload;
		});
		yield put(actions.uploadNewWordComplete({loadingUpload:false,uploaded:status}));
	} catch (e) {
		yield put(actions.loadingUploadNewWord({loadingUpload:false}));
	}
}


export default function* watchWords() {
	yield takeEvery(actions.getListAllWords.toString(), requestListAllWords)
	yield takeEvery(actions.uploadNewWord.toString(), requestUploadNewWord)
}
