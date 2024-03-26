
import instance from '../ultils/axios-custom';
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


//Register Admin, HR, mentor
export const callRegisterAdmin = (email, username, password, retypePassword) => {
  return axios.post('/api/auth/login',
    {
      email: email,
      username: username,
      password: password,
      retypePassword: retypePassword
    })
}


export const callRegisterIntern = (username, password, email) => {
  return axios.post('/api/auth/register/intern', {
    username: username,
    password: password,
    email: email
  })
}



export const callRegisterschool = (schoolName, email, username, password, phoneNumber) => {
  return axios.post('/api/auth/register/intern', {
    schoolName: schoolName,
    email: email,
    username: username,
    password: password,
    phoneNumber: phoneNumber
  })
}


export const callConfirmEmail = (id, token) => {
  return axios.get('/api/auth/email-confimation', {
    id: id,
    token: token
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
  return axios.post("/api/auth/change-password", { id: id });
}

export const callForgotPassWord = (email) => {
  return axios.post("/api/auth/change-password", { email: email });
}



export const callChangeResetPassWord = (userId) => {
  return axios.post("/api/auth/reset-password", { id: userId });
}


// Group
export const callGetGroup = () => {
  return axios.get('api/group-zalos/get');
}

export const callGetGroupDetail = (id) => {
  return axios.get(`/api/group-zalos/get-all-users-in-zalo-group/${id}`)
};

export const callCreateGroup = (tenNhom, linkNhom) => {
  return axios.post('/api/group-zalos/create', {
    tenNhom: tenNhom,
    linkNhom: linkNhom
  })
}

export const callUpdateGroup = (id, tenNhom, linkNhom) => {
  return axios.put(`/api/group-zalos/update/${id}`, {
    tenNhom: tenNhom,
    linkNhom: linkNhom
  })

}

export const callDeleteGroup = (id) => {
  return axios.delete(`/api/group-zalos/delete/${id}`)
}



export const callEditGroup = (data2Edit) => {
  return axios.put(`/api/group-zalos/update/${data2Edit.id}`, {
    ...data2Edit
  })
}

export const callGetAllUsers = () => {
  return axios.get('/api/users/get');
}



export const callAddUser2Group = (nhomZaloId, userId, isMentor) => {
  return axios.post(`/api/group-zalos/add-user-to-zalo-group/${nhomZaloId}`, {
    userId: userId,
    isMentor: isMentor
  })
}



export const callDelUserFromGroup = (nhomZaloId, userId) => {
  return axios.delete(`/api/group-zalos/delete-user-from-zalo-group/${nhomZaloId}/${userId}`)
}



export const callExportExcel = () => {
  return axios.get('/api/group-zalos/zalo-groups-excel-export', { responseType: 'blob' })
}

//intern

export const callGetIntern = () => {
  return axios.get('/api/interns/get');
}

export const callEditIntern = (data2Edit) => {
  return axios.put(`/api/interns/update/${data2Edit.mssv}`, {
    ...data2Edit
  })
}

export const callDeleteIntern = (id) => {
  return axios.delete(`/api/interns/delete/${id}`)
}


export const callCreateIntern = (data2Create) => {
  return axios.post('/api/interns/create', {
    ...data2Create
  })
}
// // bổ sung
export const callGetTruongs = () => {
  return axios.get('/api/truongs/get');
}

export const callGetViTris = () => {
  return axios.get('/api/vi-tris/get');
}

export const callGetKiThucTaps = () => {
  return axios.get('/api/ki-thuc-taps/get');
}
