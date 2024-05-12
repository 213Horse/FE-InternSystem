import axios from '../ultils/axios-custom';

export const getGroupsZalo = () => {
    return axios.get('/api/group-zalos/get');
};

export const getGroupZaloById = (id) => {
    return axios.get(`/api/group-zalos/get/${id}`);
};

export const getGroupZaloExcelExport = () => {
    return axios.get('/api/group-zalos/zalo-groups-excel-export');
};

export const callDeleteZaloGroup = (id) => {
    return axios.delete(`/api/group-zalos/delete/${id}`);
};

export const callCreateZaloGroup = (data) => {
    return axios.post(`/api/group-zalos/create`, {
        tenNhom: data.tenNhom,
        linkNhom: data.linkNhom,
    });
};

export const callUpdateZaloGroup = (id, data) => {
    return axios.put(`/api/group-zalos/update/${id}`, data);
};

export const callGetAllUsersInZaloGroup = (id) => {
    return axios.get(`/api/group-zalos/get-all-users-in-zalo-group/${id}`);
};

export const callAddUserToCommonGroupAndPrivateGroup = (commonGroupId, privateGroupId, userId, isMentor) => {
    return axios.post(`/api/group-zalos/add-user-to-zalo-group/${commonGroupId}/${privateGroupId}`, {
        userId,
        isMentor
    });
};
