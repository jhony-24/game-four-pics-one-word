import { navigate } from "gatsby";


export const operationsGetListAllWords = (state, { payload }) => {
    const { listWords, loading } = payload;

    let listWordsOrder = [];
    for (var idWord in listWords) {
        listWordsOrder.push({
            idWord,
            ...listWords[idWord],
        });
    }
    listWordsOrder = listWordsOrder.map(current => {
        current.images = Object.values(current.images);
        return current;
    })


    return {
        ...state,
        listWords: listWordsOrder,
        loading
    }
}


export const operationUploadWordImages = (state) => {
    return {
        ...state,
        uploaded: true
    }
}


export const operationUploadNewWord = (state, { payload }) => {
    const { uploaded } = payload;
    if (uploaded) {
        navigate("/list");
    }
    return {
        ...state,
        uploaded
    }
}