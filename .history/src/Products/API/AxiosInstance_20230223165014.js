import axios from "axios";

const InstanceBD = axios.create({
    baseURL:process.env.REACT_APP_BACKEND
})