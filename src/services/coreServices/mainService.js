import axios from "axios"
import { TOKEN_SERVICE_API } from "src/configuration/env";

const mainService = axios.create({
	baseURL: "http://localhost:3000/api/v1",
	headers: {
		Authorization: TOKEN_SERVICE_API,
	},
});

export default mainService
