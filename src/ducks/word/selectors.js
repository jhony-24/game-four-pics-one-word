export const getWordsTopRanked = (state, totalInRanking = 3) => {
    let cloneArray = Array.from(state.word.listWords);
    let orderByMorePoints = cloneArray.sort((a, b) => {
        return b.points - a.points;
    });

    let topRanked = orderByMorePoints.splice(0, totalInRanking).reverse();
    let meanIndex = Math.floor(topRanked.length / 2);
    let middle = topRanked[meanIndex];

    topRanked[meanIndex] = topRanked[topRanked.length - meanIndex];
    topRanked[topRanked.length - meanIndex] = middle;

    return topRanked;
}
