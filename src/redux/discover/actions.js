import { createActions } from "redux-actions"
import services from "src/services"

/**
 * @typedef {object} DiscoverWordActions
 * @property create
 * @property create
 * @property create
 * @property create
 * @property create
 * @property create
 * @property create
 */

 /**
	* @type {DiscoverWordActions}
	*/
 export const {
	createLettersToDiscover,
	assignLetterToOrder,
	giveBackLetter,
	removeMessyLetters,
	actionIncrementPoints,
	switchEnableSound,
	getEnableSound,
} = createActions(
	"CREATE_LETTERS_TO_DISCOVER", // payload
	"ASSIGN_LETTER_TO_ORDER", // payload
	"GIVEBACK_LETTER", //payload
	"REMOVE_MESSY_LETTERS",
	"ACTION_INCREMENT_POINTS",
	"SWITCH_ENABLE_SOUND",
	"GET_ENABLE_SOUND", // payload
	{
		prefix: "ducks/discover",
	}
)

// actions creators
export const incrementPoints = (idWord, idUser) => async dispatch => {
	await services.incrementWordPoints({ id: idWord })
	await services.incrementPointsUserDiscover({ id: idUser })
	dispatch(actionIncrementPoints())
}
