import axios from "axios";

const blogs = axios.create({
    baseURL : "http://localhost:3002"
});
export default blogs;