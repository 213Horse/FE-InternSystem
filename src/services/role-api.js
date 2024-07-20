import { axiosClientVer2 } from "../ultils/axios-custom"


export const getAllRoles = () => {
  return axiosClientVer2.get('/api/Role/get-all');
}