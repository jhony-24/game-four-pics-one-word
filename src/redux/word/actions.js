import { createActions } from "redux-actions"
import services from "src/services"
import Auth from "src/models/auth"
import store from "src/store/store"

/**
 * @typedef {object} WordActions
 * @property actionGetListAllWords 
 * @property actionGetListAllWord
 * @property actionGetListAllWords
 * @property actionGetListAllWords
 * @property actionGetListAllWords
 * @property actionGetListAllWords
 * @property actionGetListAllWords
 * @property actionGetListAllWords
 */

/**
 * @type {WordActions}
 */

export const {
	actionGetListAllWords,
	actionLoadingListAllWords,
	actionErrorToGetData,
	actionUploadNewWord,
	actionLoadingUploadNewWord,
	forwardNewWordPlay,
	backwardNewWordPlay,
	setDefaultIndexWordPlay,
} = createActions(
	"ACTION_GET_LIST_ALL_WORDS",
	"ACTION_LOADING_LIST_ALL_WORDS",
	"ACTION_ERROR_TO_GET_DATA",
	"ACTION_UPLOAD_NEW_WORD",
	"ACTION_LOADING_UPLOAD_NEW_WORD",
	"FORWARD_NEW_WORD_PLAY",
	"BACKWARD_NEW_WORD_PLAY",
	"SET_DEFAULT_INDEX_WORD_PLAY",
	{
		prefix: "ducks/word",
	}
)

// actions creators
export const getListAllWords = () => async dispatch => {
	const start = store.getState().word.pagination.start
	dispatch(actionLoadingListAllWords({ loading: true, error: false }))
	try {
		const { data } = await services.getListAllWords({ start, limit: 3 })
		const { nextLink, content } = data
		dispatch(
			actionGetListAllWords({
				listWords: content,
				loading: false,
				error: false,
				pagination: {
					start: nextLink,
				},
			})
		)
	} catch {
		dispatch(actionErrorToGetData({ error: true, loading: false }))
	}
}

export const uploadNewWord = dataUpload => async dispatch => {
	const { letters, images } = dataUpload
	const { uploadImages, uploadNewWord } = services
	const user = Auth.get()
	dispatch(actionLoadingUploadNewWord({ loadingUpload: true }))
	try {
		const request = await uploadImages({ images }).then(({ data: images }) => {
			let wordUploadd = uploadNewWord({
				iduser: user.iduser,
				letters,
				images,
				points: 0,
				dateCreated: new Date().toLocaleString(),
			})
			return wordUploadd
		})
		dispatch(
			actionUploadNewWord({ loadingUpload: false, uploaded: request.status })
		)
	} catch {
		dispatch(actionLoadingUploadNewWord({ loadingUpload: false }))
	}
}
