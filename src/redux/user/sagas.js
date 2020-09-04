import { takeEvery, put } from "redux-saga/effects"
import actions from "./actions"
import services from "src/services"
import { STATUS } from "./types"
import Auth from "src/models/auth"

function* requestSignIn({ payload: { username, pass } }) {
	try {
		yield put(actions.signUp({ status: STATUS.LOADING }))
		const { content } = yield services.signIn({ username, pass })
		yield put(
			actions.signIn({
				user: content,
				status: STATUS.OK,
			})
		)
	} catch (e) {}
}

function* requestSignUp({ payload: { username, pass } }) {
	try {
		yield services.createUser({ username, pass })
	} catch (e) {}
}

function* requestUpdateUsername({ payload: { username } }) {
	const auth = Auth.get()
	try {
		const { status } = yield services.updateUser({
			iduser: auth.iduser,
			username,
		})
		let newCookieData = null
		if (status) {
			newCookieData = {
				...auth,
				username,
			}
			Auth.set(newCookieData)
			dispatch(actions.setUpdateUser({ username }))
		}
	} catch (e) {}
}

function* requestUpdatePassword({payload:{pass}}) {
	const auth = Auth.get()
	try {
		await services.updateUser({
			iduser: auth.iduser,
			pass,
		})
		dispatch(actions.setUpdateUser())
	} catch (e) {}
}


export default function* watchUser() {
	yield takeEvery(actions.signIn.toString(), requestSignIn);
	yield takeEvery(actions.signUp.toString(), requestSignUp);
	yield takeEvery(actions.setUpdateUser.toString(), requestUpdateUsername);
	yield takeEvery(actions.setUpdateUser.toString(), requestUpdatePassword);
}
