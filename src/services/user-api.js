import axios from "../ultils/axios-custom"

export const getUser = () => {
  return axios.get('/api/users/get');
}