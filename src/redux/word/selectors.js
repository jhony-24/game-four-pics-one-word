import Letter from 'src/models/letter';
import store from 'src/store/store';

export const getWordsTopRanked = ({ word }, totalInRanking = 3) => {
    let cloneArray = Array.from(word.listWords);
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

export const getCurrentIndexWord = ({ discover, word }) => {
    if (discover.wordData === null) {
        return 0;
    }
    else {
        let currentIdWordDiscover = discover.wordData.idWord;
        let indexInListWord = word.listWords.findIndex(current => current.idWord === currentIdWordDiscover);
        return indexInListWord;
    }
}


export const getAllWords = ({ word }) => {
    let letter = new Letter();
    let list = word.listWords;
    let combineLetters = list.map((current => {
        return {
            ...current,
            messyLetters: letter.createNewTextArray(current.letters).join('')
        }
    }));
    return combineLetters;
}