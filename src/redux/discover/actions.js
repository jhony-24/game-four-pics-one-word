import { createAction } from "redux-actions";
import services from "src/resources/services"

// actions
const base = "ducks/discover";
export const createLettersToDiscover = createAction(`${base}/CREATE_LETTERS_TO_DISCOVER`); //payload
export const assignLetterToOrder = createAction(`${base}/ASSIGN_LETTER_TO_ORDER`); //payload
export const giveBackLetter = createAction(`${base}/GIVEBACK_LETTER`); //payload
export const removeMessyLetters = createAction(`${base}/REMOVE_MESSY_LETTERS`);
export const actionIncrementPoints = createAction(`${base}/INCREMENT_POINTS`);
export const switchEnableSound = createAction(`${base}/SWITCH_ENABLE_SOUND`);
export const getEnableSound = createAction(`${base}/GET_ENABLE_SOUND`); // payload

// actions creators
export const incrementPoints = (idWord, idUser) => async dispatch => {
    const word = await services.incrementWordPoints({ id: idWord });
    const user = await services.incrementPointsUserDiscover({ id: idUser });
    dispatch(actionIncrementPoints());
}
