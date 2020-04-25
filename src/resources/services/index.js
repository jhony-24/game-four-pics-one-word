import axios from "axios"

const word = axios.create({ baseURL: "http://localhost:3000/api/v1" });
const uploadImage = axios.create({ baseURL: "http://localhost:7000/api" });


const signIn = ({ username = "", pass = "" }) => {
    const parameters = { username, pass };
    return word.post("/user/exists", parameters);
}

const createUser = ({ username, pass }) => {
    const parameters = { username, pass };
    return word.post("/user", parameters);
}

const uploadImages = ({ images }) => {
    const formData = new FormData();
    const appendImages = (form, nameParameter, allImages) => {
        for (let index in allImages) {
            form.append(`${nameParameter}[${index}]`, allImages[index]);
        }
    }
    appendImages(formData, "images", images);
    return uploadImage.post("/upload", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}


const getListAllWords = () => {
    return word.get("/word");
}


const uploadNewWord = (parameters) => {
    return word.post("/word", parameters);
}

const incrementWordPoints = ({ id }) => {
    return word.post("/word/increment", { id });
}

export default {
    signIn,
    getListAllWords,
    uploadImages,
    uploadNewWord,
    incrementWordPoints,
    createUser
}