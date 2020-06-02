import * as upload from "./upload";
import * as word from "./word";

export default {
    uploadImages: upload.uploadImages,
    signIn: word.signIn,
    getListAllWords: word.getListAllWords,
    uploadNewWord: word.uploadNewWord,
    incrementWordPoints: word.incrementWordPoints,
    createUser: word.createUser,
    updateUser: word.updateUser,
    incrementPointsUserDiscover: word.incrementPointsUserDiscover,
}