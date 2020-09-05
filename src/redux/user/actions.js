import { createActions } from "redux-actions"

/**
 * @typedef {object} UserActions
 * @property signIn
 * @property signInComplete
 * @property signUp
 * @property signUpComplete
 * @property logout
 * @property getUser
 * @property getUserComplete
 * @property setUpdateInformation
 * @property requestLoadingData
 * @property requestErrorData
 */

/**
 * @type {UserActions}
 */
const actions = createActions(
	"SIGN_IN",
	"SIGN_IN_COMPLETE",
	"SIGN_UP",
	"SIGN_UP_COMPLETE",
	"LOGOUT",
	"GET_USER",
	"GET_USER_COMPLETE",
	"SET_UPDATE_INFORMATION",
	"REQUEST_LOADING_DATA",
	"REQUEST_ERRROR_DATA",
	{
		prefix: "ducks/user",
	}
)
export default actions
