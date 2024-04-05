
import axios from '../ultils/axios-custom'

export const getInterns = () => {
  return axios.get('/api/interns/get');
}

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


//Register Admin, HR, mentor 
export const callRegisterAdmin = (email, username, password, retypePassword) => {
  return axios.post('/api/auth/login', 
  {  email : email,
     username : username,
     password : password,
     retypePassword : retypePassword
  })
}


export const callRegisterIntern = (username, password, email) => {
  return axios.post('/api/auth/register/intern', {
    username : username,
    password : password,
    email : email
  })
}



export const callRegisterschool = (schoolName, email, username, password, phoneNumber) => {
  return axios.post('/api/auth/register/intern', {
    schoolName : schoolName,
    email : email,
    username : username,
    password : password,
    phoneNumber : phoneNumber
  })
}


export const callConfirmEmail = (id, token) => {
  return axios.get('/api/auth/email-confimation', {
    id: id,
    token : token
  })
}


export const callLogout = () => {
  return axios.post("/api/auth/logout");
}



export const callLoginWithGoogleItern = () => {
  return axios.get('/api/auth/login-with-google/intern');
}


export const callLoginWithGoogleSchool = () => {
  return axios.get('/api/auth/login-with-google/school');
}

export const callRedirectGoole = () => {
  return axios.get('/api/auth/redirect-google');
}


export const callChangePassWord = (id) => {
  return axios.post("/api/auth/change-password", {id: id});
}

export const callForgotPassWord = (email) => {
  return axios.post("/api/auth/change-password", {email: email});
}



export const callChangeResetPassWord = (userId) => {
  return axios.post("/api/auth/reset-password", {id: userId});
}

