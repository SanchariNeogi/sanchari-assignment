import Axios from 'axios';
import { getCookie } from '../helper/cookiesHelper';

const axios = Axios.create({ baseURL: 'https://tracsess-e6fd5e49db79.herokuapp.com' })

axios.interceptors.request.use(config => {
    const token = getCookie('auth_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

export default axios;