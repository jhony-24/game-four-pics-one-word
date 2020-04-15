import { handleActions } from "redux-actions";
import * as actions from "./actions";
import * as operations from "./operations";


const initialState = {
    listWords: [], //all words 
    error: false, // error to generate data
    wordData: null, // data of word
    stateDiscover: false, // indicate if discover the word 
    testLetters: [], // letter to try
    messyLetters: [], // mess up letter
    uploaded: false
}


const handlers = {

    [actions.actionGetListAllWords]: (state, action) =>
        operations.operationsGetListAllWords(state, action),

    [actions.actionUploadWordImages]: (state) =>
        operations.operationUploadWordImages(state),

    [actions.actionUploadNewWord]: (state, action) =>
        operations.operationUploadNewWord(state, action),
}


export default handleActions(handlers, initialState);