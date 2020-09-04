import { createActions } from "redux-actions"

/**
 * @typedef {object} UserActions
 * @property setUpdateUser
 * @property getUser
 * @property signIn
 * @property signUp
 * @property updateUsername
 * @property updatePassword
 */

/**
 * @type {UserActions}
 */

const actions = createActions(
	"SIGN_IN",
	"SIGN_UP",
	"SIGN_OUT",
	"GET_USER",
	"SET_UPDATE_USER",
	{
		prefix: "ducks/user",
	}
)

export default actions
