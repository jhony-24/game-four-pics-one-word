import { navigate } from "gatsby"
import { handleActions } from "redux-actions"
import * as actions from "./actions"
import _ from "lodash"
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
	[actions.actionGetListAllWords]: (state, { payload }) => {
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
		return _.update(state,'loading',() => false);
	},

	[actions.actionLoadingListAllWords]: (state, { payload }) => {
		return _.merge(state, { error: payload.error, loading: payload.loading })
	},

	[actions.actionErrorToGetData]: (state, { payload }) => {
		return _.merge(state, { error: payload.error, loading: payload.loading })
	},

	[actions.actionLoadingUploadNewWord]: (state, { payload }) => {
		return _.set(state, "loadingUpload", payload.loadingUpload)
	},

	[actions.actionUploadNewWord]: (state, { payload }) => {
		const { uploaded, loadingUpload } = payload
		if (uploaded) {
			navigate("/list")
		}
		return _.merge(state, { uploaded, loadingUpload })
	},
	[actions.setDefaultIndexWordPlay]: (state, { payload }) => {
		return _.set(state, "currentIndexListWord", payload)
	},

	[actions.forwardNewWordPlay]: state => {
		return _.update(state, "currentIndexListWord", value => value + 1)
	},

	[actions.backwardNewWordPlay]: state => {
		return _.update(state, "currentIndexListWord", value => value - 1)
	},
}

export default handleActions(handlers, initialState)
