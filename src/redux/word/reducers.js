import { navigate } from "gatsby";
import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialState = {
    listWords: [], //all words 
    error: false, // error to generate data,
    loading: true,
    loadingUpload: false,
    currentIndexListWord: 0,
}

const handlers = {

    [actions.actionGetListAllWords]: (state, { payload }) => {
        const { listWords, loading } = payload;
        let listWordsOrder = [];
        for (var idWord in listWords) {
            listWordsOrder.push({
                idWord,
                ...listWords[idWord],
            });
        }
        listWordsOrder = listWordsOrder.map(current => {
            current.images = Object.values(current.images);
            return current;
        })
        return {
            ...state,
            listWords: listWordsOrder,
            loading
        }
    },

    [actions.actionLoadingListAllWords]: (state, { payload }) => ({
        ...state,
        error: payload.error,
        loading: payload.loading
    }),

    [actions.actionErrorToGetData]: (state, { payload }) => ({
        ...state,
        error: payload.error,
        loading: payload.loading
    }),

    [actions.actionLoadingUploadNewWord]: (state, { payload }) => ({
        ...state,
        loadingUpload: payload.loadingUpload
    }),

    [actions.actionUploadNewWord]: (state, { payload }) => {
        const { uploaded, loadingUpload } = payload;
        if (uploaded) {
            navigate("/list");
        }
        return {
            ...state,
            uploaded,
            loadingUpload
        }
    },
    [actions.setDefaultIndexWordPlay]: (state, { payload }) => {
        return {
            ...state,
            currentIndexListWord: payload
        }
    },

    [actions.forwardNewWordPlay]: (state) => {

        return {
            ...state,
            currentIndexListWord: state.currentIndexListWord + 1,
        }
    },

    [actions.backwardNewWordPlay]: (state) => {
        return {
            ...state,
            currentIndexListWord: state.currentIndexListWord - 1,
        }
    }
}

export default handleActions(handlers, initialState);