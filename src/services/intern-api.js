import { axiosClientVer2 } from "../ultils/axios-custom"

export const getAllIntern = () => {
  return axiosClientVer2.get('/api/InternInfo/get-paged');
}