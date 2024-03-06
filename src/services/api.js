
import axios from '../ultils/axios-custom'

export const callLogin = (email, password) => {
  return axios.post('/api/auth/login', 
  { username : email,
    password,    
    // delay: 5000
  })
}
