import axios from 'axios';

const token = sessionStorage.getItem('token');
const apiConfig = axios.create({
    baseURL: 'https://internsystem.zouzoumanagement.xyz/api/',
    // withCredentials: false,
    headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
});

export const get = async (path: string, options = {}) => {
    const response = await apiConfig.get(path, options);
    return response.data;
};

export const post = async (path: string, options: any = {}) => {
    const response = await apiConfig.post(path, options);
    return response.data;
};

export const put = async (path: string, options = {}) => {
    const response = await apiConfig.put(path, options);
    return response.data;
};

export const deleTe = async (path: string, options = {}) => {
    const response = await apiConfig.delete(path, options);
    return response.data;
};

export default apiConfig;
