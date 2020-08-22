import { createAction, createActions } from "redux-actions"
import { STATUS } from "./types"
import services from "src/services"
import Auth from "src/models/auth"

export const {
	actionSignIn,
	actionSignUp,
	actionSignOut,
	actionCreateUser,
	getUser,
	setUpdateUser,
} = createActions(
	"ACTION_SIGN_IN",
	"ACTION_SIGN_UP",
	"ACTION_SIGN_OUT",
	"ACTION_CREATE_USER",
	"GET_USER",
	"SET_UPDATE_USER",
	{
		prefix: "ducks/user",
	}
);

// actions creator
export const signIn = ({ username, pass }) => async dispatch => {
	dispatch(actionSignIn({ status: STATUS.LOADING,}))
	try {
		const { data } = await services.signIn({ username, pass });
		dispatch(actionSignIn({
				user: data.content,
				status: STATUS.OK,
		}))
	} catch {
		dispatch(actionSignIn({
				status: STATUS.ERROR,
		}))
	}
}

export const createUser = ({ username, pass }) => async dispatch => {
	await services.createUser({ username, pass })
	dispatch(actionCreateUser())
}

export const updateUserName = ({ username }) => async dispatch => {
	const auth = Auth.get()
	const { data } = await services.updateUser({
		iduser: auth.iduser,
		username,
	})
	let newCookieData = null
	if (data.status) {
		newCookieData = {
			...auth,
			username,
		}
		Auth.set(newCookieData)
		dispatch(setUpdateUser({ username }))
	}
}

export const updatePassword = ({ pass }) => async dispatch => {
	const auth = Auth.get()
	await services.updateUser({
		iduser: auth.iduser,
		pass,
	})
	dispatch(setUpdateUser({}))
}
