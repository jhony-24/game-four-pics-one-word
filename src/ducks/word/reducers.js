import { handleActions } from "redux-actions";
import * as actions from "./actions";
import * as operations from "./operations";

const initialState = {
    listWords: [], //all words 
    error: false, // error to generate data,
    loading: true,
    wordData: null, // data of word
    stateDiscover: false, // indicate if discover the word 
    testLetters: [], // letter to try
    messyLetters: [], // mess up letter
    loadingUpload: false,
}

const handlers = {

    [actions.actionGetListAllWords]: (state, action) =>
        operations.operationsGetListAllWords(state, action),

    [actions.actionLoadingListAllWords]: (state, { payload }) => {
        return {
            ...state,
            error: payload.error,
            loading: payload.loading
        }
    },

    [actions.actionErrorToGetData]: (state, { payload }) => {
        return {
            ...state,
            error: payload.error,
            loading: payload.loading
        }
    },

    [actions.actionLoadingUploadNewWord]: (state, { payload }) => {
        return {
            ...state,
            loadingUpload: payload.loadingUpload
        }
    },

    [actions.actionUploadNewWord]: (state, action) =>
        operations.operationUploadNewWord(state, action),
}

export default handleActions(handlers, initialState);