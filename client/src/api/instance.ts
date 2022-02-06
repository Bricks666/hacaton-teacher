import Axios from "axios";

export const instance = Axios.create({
	withCredentials: true,
	baseURL: "http://localhost:3000",
});
