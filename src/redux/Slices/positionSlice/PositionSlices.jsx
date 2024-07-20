import { axiosClientVer2 } from '../../../ultils/axios-custom'

export const callGetPosition = () => {
    return axiosClientVer2.get('/api/Vitri/get-all');
}
export const callGetPositionPage = () => {
    return axiosClientVer2.get('/api/Vitri/get-paged');
}
export const createPosition = async (ten, linkNhomZalo) => {
    const data = { ten, linkNhomZalo }
    return axiosClientVer2.post('/api/Vitri/create', data);
}
export const updatePosition = (ten, linkNhomZalo) => {
    const data = { ten, linkNhomZalo };
    return axiosClientVer2.put(`/api/Vitri/update/${id}`, data);
}
export const deletePosition = (id) => {
    return axiosClientVer2.delete(`/api/Vitri/delete/${id}`);
}