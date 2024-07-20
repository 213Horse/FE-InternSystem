import { axiosClientVer2 } from '../ultils/axios-custom';

export const getSchool = () => {
    return axiosClientVer2.get('/api/TruongHoc/get-all');
}

export const getSchoolById = (id) => {
    return axiosClientVer2.get(`/api/TruongHoc/get-by-id/${id}`);
}

export const callDeleteSchool = (id) => {
    console.log(`Attempting to delete resource with ID: ${id}`);
    const url = `/api/TruongHoc/delete/${id}`;
    console.log(`DELETE request URL: ${url}`);
    return axiosClientVer2.delete(url);
}

export const callCreateSchool = async (ten, linkNhomZalo, duAnId) => {
    const data = { ten, linkNhomZalo, duAnId }
    return axiosClientVer2.post('/api/TruongHoc/create', data);
}

export const callUpdateSchool = (values) => {
    return axiosClientVer2.put(`/api/TruongHoc/update`, values);
}