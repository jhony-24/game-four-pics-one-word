import { handleActions } from "redux-actions";
import * as actions from "./actions";
import * as operations from "./operations";


const initialState = {
    wordData: null, // data of word
    stateDiscover: false, // indicate if discover the word 
    testLetters: [], // letter to try
    messyLetters: [], // mess up letter
}


const handlers = {

    [actions.createLettersToDiscover]: (state, action) =>
        operations.operationCreateMessUpLetter(state, action),

    [actions.assignLetterToOrder]: (state, action) =>
        operations.operationAssignLetter(state, action),

    [actions.giveBackLetter]: (state, action) =>
        operations.operationGivebackLetter(state, action),

    [actions.removeMessyLetters]: () =>
        operations.operationRemoveMessyLetters(initialState),

}


export default handleActions(handlers, initialState);