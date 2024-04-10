import axios from '../../../ultils/axios-custom'

export const callGetPosition = () => {
    return axios.get('/api/vi-tris/get');
}
export const createPosition = async (ten, linkNhomZalo) => {
    const data = { ten, linkNhomZalo }
    return axios.post('/api/vi-tris/create', data);
}
export const updatePosition = (id, ten, linkNhomZalo) => {
    const data = { ten, linkNhomZalo };
    return axios.put(`/api/vi-tris/update/${id}`, data);
}
export const deletePosition = (id) => {
    return axios.delete(`/api/vi-tris/delete/${id}`);
}