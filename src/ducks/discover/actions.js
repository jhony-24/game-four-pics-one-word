import { createAction } from "redux-actions";

const base = "ducks/discover";
export const createLettersToDiscover = createAction(`${base}/CREATE_LETTERS_TO_DISCOVER`); //payload
export const assignLetterToOrder = createAction(`${base}/ASSIGN_LETTER_TO_ORDER`); //payload
export const giveBackLetter = createAction(`${base}/GIVEBACK_LETTER`); //payload
export const removeMessyLetters = createAction(`${base}/REMOVE_MESSY_LETTERS`);
