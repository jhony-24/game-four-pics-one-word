import Auth from "src/models/auth"
import { navigate } from "gatsby"
import { STATUS } from "./types"
import { handleActions } from "redux-actions"
import * as actions from "./actions"
import Indexed from "src/models/indexed"
import _ from "lodash"

const initialState = {
	user: null,
	logged: false,
	loading: false,
	updatedUser: false,
}

const handlers = {
	[actions.actionSignIn]: (state, { payload }) => {
		switch (payload.status) {
			case STATUS.LOADING:
				return _.update(state, "loading", value => !value)
			case STATUS.OK:
				const { user, status } = payload
				let userDb = new Indexed()
				if (status) {
					userDb.create({
						key: "sound",
						enableSound: true,
					})
					Auth.set(user)
					navigate("/list")
					return _.merge(state, { user, logged: true, loading: false })
				}
				return _.set(state,'loading',false);
			case STATUS.ERROR:
				return _.set(state,'loading',false);
			default:
				return state
		}
	},

	[actions.actionCreateUser]: state => {
		return state
	},

	[actions.getUser]: state => {
		return _.set(state, "user", Auth.get())
	},

	[actions.setUpdateUser]: (state, { payload }) => {
		if (payload.hasOwnProperty("username")) {
			return _.merge(state, {
				user: {
					username: payload.username,
				},
			})
		}
		return state
	},
}

export default handleActions(handlers, initialState)
