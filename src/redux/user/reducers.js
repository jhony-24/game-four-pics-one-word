import Auth from "src/models/auth"
import { handleActions } from "redux-actions"
import actions from "./actions"
import _ from "lodash"

const initialState = {
	user: null,
	logged: false,
	loading: false,
	updatedUser: false,
	forgotPassword: {
		codeVerification: "0000",
		isVerified: false,
	},
}

const handlers = {
	[actions.signInComplete]: (state, { payload }) => {
		const { user, logged } = payload
		if (logged) {
			return _.merge(state, { user, logged, loading: false });
		}
	},

	[actions.getUserComplete]: state => _.set(state, "user", Auth.get()),

	[actions.setUpdateInformation]: (state, { payload }) => {
		if (payload.hasOwnProperty("username")) {
			return _.merge(state, {
				user: {
					username: payload.username,
				},
			});
		}
		return state;
	},

	[actions.requestErrorData]: state => _.set(state, "loading", false),
	[actions.requestLoadingData]: state => _.set(state, "loading", true),

	[actions.createCodeVerification]: state => {
		const [min, max] = [1000, 9000];
		const randomCodeVerification = Math.floor(Math.random() * max - min) + min;
		return _.set(state,"forgotPassword.codeVerification",randomCodeVerification);
	},
	[actions.validateCodeVerification]: (state, { payload }) => {
		const codeIsVerified = state.forgotPassword.codeVerification === payload.codeVerification;
		return _.set(state,"forgotPassword.isVerified",codeIsVerified);
	},
}

export default handleActions(handlers, initialState)
