import { takeEvery } from "redux-saga/effects"
import actions from "./actions"
import IncrementValueService from "src/services/IncrementValueService"

function* requestIncrementPoints({ payload: { idWord, idUser } }) {
	const increment = IncrementValueService()
	try {
		yield increment.incrementWordPoints({ id: idWord })
		yield increment.incrementPointsUserDiscover({ id: idUser })
	} catch {
		
	}
}

export default function* watchDiscover() {
	yield takeEvery(actions.incrementPoints.toString(), requestIncrementPoints)
}
