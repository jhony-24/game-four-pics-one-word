import { takeEvery, put, take } from "redux-saga/effects"
import actions from "./actions"
import Auth from "src/models/auth"
import UserCheckAuthService from "src/services/UserCheckAuthService"
import UserSettingsService from "src/services/UserSettingsService"
import { navigate } from "gatsby"
import { firebaseAuth } from "src/configuration/firebaseConfig"
import { providerAuthentication } from "src/configuration/authentication"

function* requestSignIn({ payload: { username, pass } }) {
	yield put(actions.requestLoadingData())
	try {
		const { content, status } = yield UserCheckAuthService().signIn({ username, pass });
		if(status){
			Auth.set(content);	
			yield put(actions.signInComplete({ user: content,logged : true }));
			yield navigate("/list");
		}
	} catch{
		yield put(actions.requestErrorData())
	}
}


function* requestSignInGoogle() {
	try{
		const { user } = yield firebaseAuth().signInWithPopup(providerAuthentication.google);
		if(user.emailVerified) {
			let userProps = {
				username : user.displayName.replaceAll(' ',''),
				email : user.email,
				iduser : user.uid,
			};
			Auth.set(userProps);
			yield put(actions.signInComplete({user:userProps,logged:true}));
			yield navigate("/list");
		}
	}
	catch(e) {
		throw new Error(e.message);
	}
}

function* requestSignInFacebook() {
	try{
		yield firebaseAuth().signInWithPopup(providerAuthentication.facebook);
	}
	catch(e) {
		throw new Error(e.message);
	}
}


function* requestSignUp({ payload: { username, pass } }) {
	try {
		yield UserCheckAuthService().signUp({ username, pass })
	} catch {
		yield put(actions.requestErrorData())
	}
}

function* requestUpdateUsername({ payload: { username } }) {
	const auth = Auth.get()
	try {
		const { status } = yield UserSettingsService().updateUser({
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
	} catch {
		yield put(actions.requestErrorData())
	}
}

function* requestUpdatePassword({ payload: { pass } }) {
	const auth = Auth.get()
	try {
		yield UserSettingsService().updateUser({
			iduser: auth.iduser,
			pass,
		})
		yield put(actions.setUpdateUser())
	} catch {
		yield put(actions.requestErrorData())
	}
}

function* requestResetPassword() {
	console.log("ok")
	try {
	}catch {
		yield put(actions.requestErrorData());
	}
}

export default function* watchUser() {
	yield takeEvery(actions.signIn.toString(), requestSignIn)
	yield takeEvery(actions.signInGoogle.toString(), requestSignInGoogle)
	yield takeEvery(actions.signInFacebook.toString(), requestSignInFacebook)
	yield take(actions.signUp.toString(), requestSignUp)
	yield take(actions.resetPassword.toString(),requestResetPassword)
	yield takeEvery(actions.setUpdateInformation.toString(), requestUpdateUsername)
	yield takeEvery(actions.setUpdateInformation.toString(), requestUpdatePassword)
}
