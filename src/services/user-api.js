import { axiosClientVer2 } from '../ultils/axios-custom';

export const getUser = () => {
    return axiosClientVer2.get('/api/User/get-all-user');
};

export const getAllUsers = () => {
    return axiosClientVer2.get('/api/User/get-all-user');
};

export const CreateAUser = (hoVaten, email, username, password, phoneNumber, roleName) => {
    return axiosClientVer2.post('/api/User/create-user-by-admin', {
        hoVaten,
        email,
        username,
        password,
        phoneNumber,
        roleName,
    });
};
