import axios from "axios"

const word = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {
        "Authorization": process.env.GATSBY_TOKEN_API_WORD
    }
});

export const signIn = ({ username = "", pass = "" }) => {
    const parameters = { username, pass };
    return word.post(`/users/exists`, parameters);
}

export const createUser = ({ username, pass }) => {
    const parameters = { username, pass };
    return word.post(`/users`, parameters);
}

export const updateUser = (parameters) => {
    const { iduser, ...rest } = parameters;
    return word.put(`/users/${iduser}`, rest);
}

export const getListAllWords = () => {
    return word.get(`/words`);
}

export const uploadNewWord = (parameters) => {
    return word.post(`/words`, parameters);
}

export const incrementWordPoints = ({ id }) => {
    return word.post(`/words/${id}/points/increment`);
}
