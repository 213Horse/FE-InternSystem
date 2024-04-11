import axios from "../../../ultils/axios-custom";

export const getInterns = () => {
    return axios.get('/api/interns/get');
}

