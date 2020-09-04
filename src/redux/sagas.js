import { all } from "redux-saga/effects";
import { watchWords } from "./word/sagas";

export default function* sagas() {
		yield all([
			watchWords()
		]);
}
