import axios from '../../../ultils/axios-custom'

export const createProject = async (ten, linkNhomZalo) => {
    const data = { ten, leaderId, thoiGianBatDau, thoiGianKetThuc }
    return axios.post('/api/du-ans/create-project', data);
}
export const searchProjects = (value) => {
    return axios.get(`/api/du-ans/search-project?ten=${value}`)
}
export const callGetProject = () => {
    return axios.get('/api/du-ans/get-all-projects');
}
// export const updateProject = (value) => {
//     const data {}
//     return axios.put(`/api/du-ans/update-project?id=${value}`, data);
// }
