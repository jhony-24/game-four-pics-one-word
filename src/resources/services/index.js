import axios from "axios"


const word = axios.create({
    baseURL: "http://localhost:3000/api"
});


const uploadImage = axios.create({
    baseURL: ""
});


const signIn = ({ username = "", pass = "" }) => {
    const parameters = { username, pass };
    return word.post("/user/check", parameters);
}


const uploadImages = ({ images }) => {
    const parameters = { images };
    return uploadImage.post("/upload");
}


const getListAllWords = () => {
    return word.get("/word");
}


const uploadNewWord = ({ idUser, images, letters }) => {
    const parameters = { idUser, images, letters };
    return word.post("/word");
}


export default {
    signIn,
    getListAllWords,
    uploadImages,
    uploadNewWord
}