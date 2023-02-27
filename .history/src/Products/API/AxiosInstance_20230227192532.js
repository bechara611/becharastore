import axios from "axios";


 const InstanceBD = axios.create({
    baseURL: process.env.REACT_APP_BACKEND
})

InstanceBD.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'token': localStorage.getItem('token') || undefined
    }
    return config
})

export default InstanceBD;
