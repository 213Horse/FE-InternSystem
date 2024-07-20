import { axiosClientVer2 } from '../../../ultils/axios-custom'

export const createProject = async (ten, leaderId, thoiGianBatDau, thoiGianKetThuc) => {
    const data = { ten, leaderId, thoiGianBatDau, thoiGianKetThuc }
    return axiosClientVer2.post('/api/du-ans/create-project', data);
}
export const searchProjects = (value) => {
    return axiosClientVer2.get(`/api/du-ans/search-project?ten=${value}`)
}
export const callGetProject = () => {
    return axiosClientVer2.get('/api/DuAn/get-all');
}
export const updateProject = (id, ten, leaderId, thoiGianBatDau, thoiGianKetThuc) => {
    const data = { ten, leaderId, thoiGianBatDau, thoiGianKetThuc };
    return axiosClientVer2.put(`/api/du-ans/update-project/${id}`, data);
}
export const deleteProject = (values) => {
    console.log(values)
    return axiosClientVer2.delete(`/api/DuAn/delete`, values);
}