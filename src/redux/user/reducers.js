import Auth from "src/models/auth"
import { navigate } from "gatsby"
import { handleActions } from "redux-actions"
import actions from "./actions"
import _ from "lodash"

const initialState = {
	user: null,
	logged: false,
	loading: false,
	updatedUser: false,
}

const handlers = {
	[actions.signInComplete]: (state, { payload }) => {
		const { user, logged } = payload
		if (logged) {
			navigate("/list")
			return _.merge(state, { user, logged, loading: false })
		}
		return _.set(state, "loading", false)
	},

	[actions.getUserComplete]: state => _.set(state, "user", Auth.get()),

	[actions.setUpdateInformation]: (state, { payload }) => {
		if (payload.hasOwnProperty("username")) {
			return _.merge(state, {
				user: {
					username: payload.username,
				},
			})
		}
		return state
	},

	[actions.requestErrorData]: state => _.set(state, "loading", false),
	[actions.requestLoadingData]: state => _.set(state, "loading", true),
}

export default handleActions(handlers, initialState)
