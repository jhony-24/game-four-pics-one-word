import { navigate } from "gatsby"
import { handleActions } from "redux-actions"
import actions from "./actions"
import { merge, set, update } from "lodash"
const initialState = {
	listWords: [], //all words
	error: false, // error to generate data,
	loading: true,
	loadingUpload: false,
	currentIndexListWord: 0,
	pagination: {
		start: "",
	},
}

const handlers = {
	[actions.getListAllWordsComplete]: (state, { payload }) => {
		const { listWords, loading, pagination } = payload
		let listWordsOrder = []
		for (var idWord in listWords) {
			listWordsOrder.push({
				idWord,
				...listWords[idWord],
			})
		}
		listWordsOrder = listWordsOrder.map(current => {
			current.images = Object.values(current.images)
			return current
		})
		if (state.pagination.start !== pagination.start) {
			return {
				...state,
				listWords: [...state.listWords, ...listWordsOrder],
				loading,
				pagination: {
					start: pagination.start,
				},
			}
		}
		return update(state, "loading", () => false)
	},

	[actions.loadingListAllWords]: state => set(state, "loading", true),
	[actions.errorToGetData]: state => merge(state, { error: true, loading: false }),

	[actions.loadingUploadNewWord]: (state, { payload }) => {
		return set(state, "loadingUpload", payload)
	},

	[actions.uploadNewWordComplete]: (state, { payload }) => {
		if (payload.uploaded) {
			navigate("/list")
		}
		return merge(state, payload);
	},

	[actions.setDefaultIndexWordPlay]: (state, { payload }) => {
		return set(state, "currentIndexListWord", payload)
	},

	[actions.forwardNewWordPlay]: state => {
		return update(state, "currentIndexListWord", value => value + 1)
	},

	[actions.backwardNewWordPlay]: state => {
		return update(state, "currentIndexListWord", value => value - 1)
	},
}

export default handleActions(handlers, initialState)
