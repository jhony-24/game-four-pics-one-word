import axios from "axios"

const mainService = axios.create({
	baseURL: "http://localhost:3000/api/v1",
	headers: {
		Authorization: process.env.GATSBY_TOKEN_API_WORD,
	},
});

export default mainService
