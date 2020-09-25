import Auth from "src/models/auth"
import { handleActions } from "redux-actions"
import actions from "./actions"
import { merge, set } from "lodash"

const initialState = {
	user: null,
	logged: false,
	loading: false,
	updatedUser: false,
	forgotPassword: {
		codeVerification: "0000",
		isVerified: false,
		isCreated : false,
	},
}
const handlers = {
	[actions.signInComplete]: (state, { payload }) => {
		const { user, logged } = payload
		if (logged) {
			return merge(state, { user, logged, loading: false });
		}
	},

	[actions.getUserComplete]: state => set(state, "user", Auth.get()),

	[actions.setUpdateInformation]: (state, { payload }) => {
		if (payload.hasOwnProperty("username")) {
			return merge(state, {
				user: {
					username: payload.username,
				},
			});
		}
		return state;
	},

	[actions.requestErrorData]: state => set(state, "loading", false),
	[actions.requestLoadingData]: state => set(state, "loading", true),

	[actions.createCodeVerification]: state => {
		const [min, max] = [1000, 9000];
		const randomCodeVerification = Math.floor(Math.random() * max - min) + min;
		return set(state,"forgotPassword",{
			...state.forgotPassword,
			codeVerification: randomCodeVerification,
			isCreated : true
		})
	},
	[actions.validateCodeVerification]: (state, { payload }) => {
		const codeIsVerified = state.forgotPassword.codeVerification === payload.codeVerification;
		return set(state,"forgotPassword.isVerified",codeIsVerified);
	},
}

export default handleActions(handlers, initialState)
