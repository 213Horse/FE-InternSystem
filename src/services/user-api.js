import { axiosClientVer2 } from '../ultils/axios-custom';

export const getUser = () => {
  return axiosClientVer2.get('/api/users/get');
}

export const getAllUser = () => {
  return axiosClientVer2.get('/api/User/get-all-user');
}
export const getAllRole = () => {
  return axiosClientVer2.get('/api/Role/get-all');
}
export const getAllUserRole = () => {
  return axiosClientVer2.get('/api/Role/get-all-user-role');
}


export const getAllUsers = () => {
    return axiosClientVer2.get('/api/User/get-all-user');
};

export const CreateAUser = (hoVaten, email, username, password, phoneNumber, roleName) => {
    return axiosClientVer2.post('/api/Auth/create-user', {
        hoVaten,
        email,
        username,
        password,
        phoneNumber,
        roleName,
    });
};
