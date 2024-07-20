import { axiosClientVer2 } from '../ultils/axios-custom';

export const getPosition = () => {
    return axiosClientVer2.get('/api/Vitri/get-all');
}

export const getPositionById = (id) => {
    return axiosClientVer2.get(`/api/Vitri/get-by-id/${id}`);
}

export const callDeletePosition = (id) => {
    console.log(`Attempting to delete resource with ID: ${id}`);
    const url = `/api/Vitri/delete/${id}`;
    console.log(`DELETE request URL: ${url}`);
    return axiosClientVer2.delete(url);
}

export const callCreatePosition = async (ten, linkNhomZalo, duAnId) => {
    const data = { ten, linkNhomZalo, duAnId }
    return axiosClientVer2.post('/api/Vitri/create', data);
}

export const callUpdatePosition = ( values) => {
    return axiosClientVer2.put(`/api/Vitri/update`, values);
}