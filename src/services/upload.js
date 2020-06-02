import axios from "axios";

const uploadImage = axios.create({
    baseURL: "http://localhost:7000/api/v1"
});

export const uploadImages = ({ images }) => {
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
