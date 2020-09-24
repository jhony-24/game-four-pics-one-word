export const SET_LETTER = "SET_LETTER"
export const SET_INITIAL_LETTERS = "SET_INITIAL_LETTERS"
export const SET_NOT_ENABLED = "SET_NOT_ENABLED"
export const CHECK_VALUE_IS_CORRECT = "CHECK_VALUE_IS_CORRECT"
export const RESET_CHECK_LETTER = "RESET_CHECK_LETTER"

export const setLetter = payload => ({
	type: SET_LETTER,
	payload,
})

export const setInitialLetters = payload => ({
	type: SET_INITIAL_LETTERS,
	payload
})

export const checkValueIsCorrect = payload => ({
	type: CHECK_VALUE_IS_CORRECT,
	payload,
})

export const resetCheckLetter = () => ({
	type : RESET_CHECK_LETTER
})