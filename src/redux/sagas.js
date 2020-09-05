import { all, fork } from "redux-saga/effects"
import watchWords from "./word/sagas"
import watchUser from "./user/sagas"

export default function* sagas() {
	yield all([fork(watchUser), fork(watchWords)])
}
