export const getIdWord = (modelReducer) => {
    let idWord = modelReducer.wordData !== null ? modelReducer.wordData.idWord : '';
    return idWord;
}