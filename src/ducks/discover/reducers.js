import { handleActions } from "redux-actions";
import * as actions from "./actions";
import Letter from "src/models/letter";
import win from "src/resources/sounds/s20200404win.mp3";
import click from "src/resources/sounds/s20200404click.wav";

const letterModel = new Letter();


const initialState = {
    wordData: null, // data of word
    stateDiscover: false, // indicate if discover the word 
    testLetters: [], // letter to try
    messyLetters: [], // mess up letter
}

const handlers = {

    [actions.createLettersToDiscover]: (state, { payload }) => {
        const { letters } = payload;
        const totalLetters = 2;
        return {
            ...state,
            stateDiscover: false,
            wordData: payload,
            testLetters: Array(letters.length).fill(0),
            messyLetters: letterModel.createNewTextArray(letters, totalLetters),
        }
    },

    [actions.assignLetterToOrder]: (state, { payload }) => {
        let { testLetters, messyLetters, stateDiscover } = state;
        let { from, to } = letterModel.moveValueBetween(messyLetters, testLetters, payload);
        let audio = new Audio();
        stateDiscover = state.wordData.letters === testLetters.join('');
        if (stateDiscover) audio.src = win;
        else audio.src = click;
        audio.play();
        return {
            ...state,
            testLetters: to,
            messyLetters: from,
            stateDiscover
        }
    },

    [actions.giveBackLetter]: (state, { payload }) => {
        let { testLetters, messyLetters } = state;
        let { from, to } = letterModel.moveValueBetween(testLetters, messyLetters, payload);
        return {
            ...state,
            testLetters: from,
            messyLetters: to,
            stateDiscover: false
        }
    },

    [actions.removeMessyLetters]: () => {
        return initialState;
    },

    [actions.actionIncrementPoints]: (state) => {
        return state;
    }

}

/*
export const operationTestDiscoveredWord = (state) => {
    return {
        ...state,
        stateDiscover: state.wordData.letters === state.testLetters.join('')
    }
}
 */
export default handleActions(handlers, initialState);