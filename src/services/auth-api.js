import  { axiosClientVer2 }  from '../ultils/axios-custom'

export const callLogin = async (username, password) => {
  return await axiosClientVer2.post('/api/Auth/login',
    {
      username,
      password,
    })
}


//Register Admin, HR, mentor 
export const callRegisterAdmin = (email, username, password, retypePassword) => {
  return axiosClientVer2.post('/api/auth/login',
    {
      email: email,
      username: username,
      password: password,
      retypePassword: retypePassword
    })
}


export const callRegisterIntern = (username, password, email) => {
  return axiosClientVer2.post('/api/auth/register/intern', {
    username: username,
    password: password,
    email: email
  })
}



export const callRegisterschool = (schoolName, email, username, password, phoneNumber) => {
  return axiosClientVer2.post('/api/auth/register/intern', {
    schoolName: schoolName,
    email: email,
    username: username,
    password: password,
    phoneNumber: phoneNumber
  })
}


export const callConfirmEmail = (id, token) => {
  return axiosClientVer2.get('/api/auth/email-confimation', {
    id: id,
    token: token
  })
}


export const callLogout = () => {
  return axiosClientVer2.post("/api/auth/logout");
}



export const callLoginWithGoogleItern = () => {
  return axiosClientVer2.get('/api/auth/login-with-google/intern');
}


export const callLoginWithGoogleSchool = () => {
  return axiosClientVer2.get('/api/auth/login-with-google/school');
}

export const callRedirectGoole = () => {
  return axiosClientVer2.get('/api/auth/redirect-google');
}


export const callChangePassWord = (id) => {
  return axiosClientVer2.post("/api/auth/change-password", { id: id });
}

export const callForgotPassWord = (email) => {
  return axiosClientVer2.post("/api/Auth/forgot-password", { email: email });
}



export const callChangeResetPassWord = (userId) => {
  return axiosClientVer2.post("/api/auth/reset-password", { id: userId });
}


export const callVerifyOpt = (email, code) => {
  return axiosClientVer2.post("/api/Auth/check-valid-code", {
    email : email,
    code: code
  })
}

export const callResetPassword = (email, newPassword, confirmPassword) => {
  return axiosClientVer2.post("/api/Auth/reset-password", {
    email,
    newPassword,
    confirmPassword
  });
}