import axios from "axios";

const uploaderService = axios.create({
	baseURL: "http://localhost:7000/api/v1",
})

export default uploaderService
