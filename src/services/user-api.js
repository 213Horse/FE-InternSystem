import { axiosClientVer2 } from "../ultils/axios-custom"

export const getUser = () => {
  return axiosClientVer2.get('/api/users/get');
}