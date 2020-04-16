import Letter from "src/models/letter";
import win from "src/resources/sounds/s20200404win.mp3";
import click from "src/resources/sounds/s20200404click.wav";

const letterModel = new Letter();

export const operationCreateMessUpLetter = (state, { payload }) => {
    const { letters } = payload;
    const totalLetters = 2;

    return {
        ...state,
        stateDiscover: false,
        wordData: payload,
        testLetters: Array(letters.length).fill(0),
        messyLetters: letterModel.createNewTextArray(letters, totalLetters),
    }
}

export const operationAssignLetter = (state, { payload }) => {
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
}

export const operationGivebackLetter = (state, { payload }) => {
    let { testLetters, messyLetters } = state;
    let { from, to } = letterModel.moveValueBetween(testLetters, messyLetters, payload);

    return {
        ...state,
        testLetters: from,
        messyLetters: to,
        stateDiscover: false
    }
}

export const operationTestDiscoveredWord = (state) => {
    return {
        ...state,
        stateDiscover: state.wordData.letters === state.testLetters.join('')
    }
}

export const operationRemoveMessyLetters = (initialState) => {
    return initialState;
}