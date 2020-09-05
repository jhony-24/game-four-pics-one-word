import { takeEvery } from "redux-saga/effects"
import actions from "./actions"
import services from "src/services"

function* requestIncrementPoints({ payload: { idWord, idUser } }) {
	yield services.incrementWordPoints({ id: idWord });
	yield services.incrementPointsUserDiscover({ id: idUser });
}

export default function* watchDiscover() {
	yield takeEvery(actions.incrementPoints.toString(), requestIncrementPoints)
}
