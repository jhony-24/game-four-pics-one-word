import { handleActions } from "redux-actions";
import * as actions from "./actions";
import Letter from "src/models/letter";
import win from "src/resources/sounds/s20200404win.mp3";
import click from "src/resources/sounds/s20200404click.wav";
import Indexed from "src/models/indexed";

const letterModel = new Letter();

const initialState = {
    wordData: null, // data of word
    stateDiscover: false, // indicate if discover the word 
    testLetters: [], // letter to try
    messyLetters: [], // mess up letter,
    enableSound: false, // sound when click or win the game
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
        if (state.enableSound) {
            if (stateDiscover) audio.src = win;
            else audio.src = click;
            audio.play();
        }
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

    [actions.removeMessyLetters]: (state) => {
        return {
            ...initialState,
            enableSound: state.enableSound,
        }
    },

    [actions.actionIncrementPoints]: (state) => {
        return state;
    },

    [actions.switchEnableSound]: (state) => {
        let indexed = new Indexed();
        indexed.update({
            key: "sound",
            enableSound: !state.enableSound
        });
        return {
            ...state,
            enableSound: !state.enableSound
        }
    },

    [actions.getEnableSound]: (state, { payload }) => {
        return {
            ...state,
            enableSound: payload.enableSound
        }
    },

}

export default handleActions(handlers, initialState);