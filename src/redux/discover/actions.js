import { createActions } from "redux-actions"

/**
 * @typedef {object} DiscoverWordActions
 * @property createLettersToDiscover
 * @property assignLetterToOrder
 * @property giveBackLetter
 * @property removeMessyLetters
 * @property incrementPointsComplete
 * @property switchEnableSound
 * @property getEnableSound
 * @property incrementPoints
 */

/**
 * @type {DiscoverWordActions}
 */
const actions = createActions(
	"CREATE_LETTERS_TO_DISCOVER", // payload
	"ASSIGN_LETTER_TO_ORDER", // payload
	"GIVEBACK_LETTER", //payload
	"REMOVE_MESSY_LETTERS",
	"INCREMENT_POINTS",
	"INCREMENT_POINTS_COMPLETE",
	"SWITCH_ENABLE_SOUND",
	"GET_ENABLE_SOUND", // payload
	{
		prefix: "ducks/discover",
	}
)

export default actions
