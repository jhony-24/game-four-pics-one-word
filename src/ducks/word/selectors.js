import _ from "lodash";

export const getWordsTopRanked = (state, totalInRanking = 3) => {
    let cloneArray = Array.from(state.word.listWords);
    let orderByMorePoints = cloneArray.sort((a, b) => {
        return b.points - a.points;
    });
    let topRanked = orderByMorePoints.splice(0, totalInRanking);
    return topRanked;
}
