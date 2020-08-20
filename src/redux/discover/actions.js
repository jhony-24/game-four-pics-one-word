import { createAction, createActions } from "redux-actions"
import services from "src/services"

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
	const word = await services.incrementWordPoints({ id: idWord })
	const user = await services.incrementPointsUserDiscover({ id: idUser })
	dispatch(actionIncrementPoints())
}
