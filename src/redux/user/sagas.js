import { takeEvery, put } from "redux-saga/effects"
import actions from "./actions"
import services from "src/services"
import Auth from "src/models/auth"

function* requestSignIn({ payload: { username, pass } }) {
	try {
		yield put(actions.requestLoadingData())
		const { content, status } = yield services.signIn({ username, pass })
		if(status){
			Auth.set(content);	
			yield put(actions.signInComplete({ user: content,logged : true }))
		}
	} catch (e) {
		yield put(actions.requestErrorData())
	}
}

function* requestSignUp({ payload: { username, pass } }) {
	try {
		yield services.createUser({ username, pass })
	} catch (e) {
		yield put(actions.requestErrorData())
	}
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
			yield put(actions.setUpdateUser({ username }))
		}
	} catch (e) {
		yield put(actions.requestErrorData())
	}
}

function* requestUpdatePassword({ payload: { pass } }) {
	const auth = Auth.get()
	try {
		yield services.updateUser({
			iduser: auth.iduser,
			pass,
		})
		yield put(actions.setUpdateUser())
	} catch (e) {
		yield put(actions.requestErrorData())
	}
}

export default function* watchUser() {
	yield takeEvery(actions.signIn.toString(), requestSignIn)
	yield takeEvery(actions.signUp.toString(), requestSignUp)
	yield takeEvery(actions.setUpdateInformation.toString(), requestUpdateUsername)
	yield takeEvery(actions.setUpdateInformation.toString(), requestUpdatePassword)
}
