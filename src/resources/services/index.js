import axios from "axios"


const word = axios.create({
    baseURL: "http://localhost:3000/api"
});


const uploadImage = axios.create({
    baseURL: "http://localhost:7000/api"
});


const signIn = ({ username = "", pass = "" }) => {
    const parameters = { username, pass };
    return word.post("/user/check", parameters);
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