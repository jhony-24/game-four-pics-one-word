import axios from "axios"

const word = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {
        "Authorization": process.env.GATSBY_TOKEN_API_WORD
    }
});

export const signIn = ({ username = "", pass = "" }) => {
    const parameters = { username, pass };
    return word.post("/user/exists", parameters);
}

export const createUser = ({ username, pass }) => {
    const parameters = { username, pass };
    return word.post("/user", parameters);
}

export const updateUser = (parameters) => {
    return word.put("/", parameters);
}

export const getListAllWords = () => {
    return word.get("/word");
}

export const uploadNewWord = (parameters) => {
    return word.post("/word", parameters);
}

export const incrementWordPoints = ({ id }) => {
    return word.post("/word/increment", { id });
}
