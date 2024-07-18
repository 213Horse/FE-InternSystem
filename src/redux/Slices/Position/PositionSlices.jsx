import { axiosClientVer2 } from '../../../ultils/axios-custom'

export const callGetPosition = () => {
    return axiosClientVer2.get('/api/vi-tris/get');
}
export const createPosition = async (ten, linkNhomZalo) => {
    const data = { ten, linkNhomZalo }
    return axiosClientVer2.post('/api/vi-tris/create', data);
}
export const updatePosition = (id, ten, linkNhomZalo) => {
    const data = { ten, linkNhomZalo };
    return axiosClientVer2.put(`/api/vi-tris/update/${id}`, data);
}
export const deletePosition = (id) => {
    return axiosClientVer2.delete(`/api/vi-tris/delete/${id}`);
}