
import axios from "axios";

const baseUrl = "http://45.153.68.178/";
export const Api = axios.create({
    baseURL: baseUrl,
});
export default baseUrl;

