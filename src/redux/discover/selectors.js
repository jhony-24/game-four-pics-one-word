import { createSelector } from "reselect";

export const getWordId = createSelector(state => state.discover, discover => {
	return discover.wordData !== null ? discover.wordData.idWord : '';
})