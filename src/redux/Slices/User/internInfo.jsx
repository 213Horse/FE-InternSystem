import { axiosClientVer2 } from "../../../ultils/axios-custom";

export const getInterns = () => {
    return axiosClientVer2.get('/api/interns/get');
}

