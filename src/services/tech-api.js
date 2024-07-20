import { axiosClientVer2 } from '../ultils/axios-custom';

export const getTech = () => {
    return axiosClientVer2.get('/api/CongNghe/get-all');
}

export const getTechById = (id) => {
    return axiosClientVer2.get(`/api/CongNghe/get-by-id/${id}`);
}

export const callDeleteTech = (id) => {
    console.log(`Attempting to delete resource with ID: ${id}`);
    const url = `/api/congNghe/delete/${id}`;
    console.log(`DELETE request URL: ${url}`);
    return axiosClientVer2.delete(url);
}

export const callCreateTech = async (ten, idViTri, urlImage, isActive, isDelete) => {
    const data = { ten, idViTri, urlImage, isActive, isDelete }
    return axiosClientVer2.post('/api/congNghe/create', data);
}

export const callUpdateTech = (values) => {
    return axiosClientVer2.put(`/api/congNghe/update`, values);
}