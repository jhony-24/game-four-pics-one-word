import { createAction } from "redux-actions";
import services from "src/resources/services"


const base = "ducks/discover";
export const createLettersToDiscover = createAction(`${base}/CREATE_LETTERS_TO_DISCOVER`); //payload
export const assignLetterToOrder = createAction(`${base}/ASSIGN_LETTER_TO_ORDER`); //payload
export const giveBackLetter = createAction(`${base}/GIVEBACK_LETTER`); //payload
export const removeMessyLetters = createAction(`${base}/REMOVE_MESSY_LETTERS`);
export const actionIncrementPoints = createAction(`${base}/INCREMENT_POINTS`);


export const incrementPoints = (idWord) => async dispatch => {
    const request = await services.incrementWordPoints({ id: idWord });
    dispatch(actionIncrementPoints());
}