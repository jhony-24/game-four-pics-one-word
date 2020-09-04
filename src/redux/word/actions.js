import { createActions } from "redux-actions"

/**
 * @typedef {object} WordActions
 * @property getListAllWords
 * @property getListAllWordsComplete
 * @property loadingListAllWords
 * @property errorToGetData
 * @property uploadNewWord
 * @property uploadNewWordComplete
 * @property loadingUploadNewWord
 * @property forwardNewWordPlay
 * @property backwardNewWordPlay
 * @property setDefaultIndexWordPlay
 */

/**
 * @type {WordActions}
 */

const actions = createActions(
	"GET_LIST_ALL_WORDS",
	"GET_LIST_ALL_WORDS_COMPLETE",
	"LOADING_LIST_ALL_WORDS",
	"ERROR_TO_GET_DATA",
	"UPLOAD_NEW_WORD",
	"UPLOAD_NEW_WORD_COMPLETE",
	"LOADING_UPLOAD_NEW_WORD",
	"FORWARD_NEW_WORD_PLAY",
	"BACKWARD_NEW_WORD_PLAY",
	"SET_DEFAULT_INDEX_WORD_PLAY",
	{
		prefix: "ducks/word",
	}
)

export default actions
