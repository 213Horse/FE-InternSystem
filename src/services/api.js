
import axios from '../ultils/axios-custom'

export const callLogin = (email, password) => {
  return axios.post('/api/auth/login',
    {
      username: email,
      password,
      // delay: 5000
    })
}


export const callGetProject = () => {
  return axios.get('/api/du-ans/get-all-projects');
}
export const callGetPosition = () => {
  return axios.get('/api/vi-tris/get');
}
export const searchProjects = (value) => {
  return axios.get(`/api/du-ans/search-project?ten=${value}`, {
  })
}
