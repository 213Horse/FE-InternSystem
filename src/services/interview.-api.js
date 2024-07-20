import { axiosClientVer2 } from "../ultils/axios-custom";


export const createInterview =  (values) => {
    return  axiosClientVer2.post('/api/Interview/create-phong-van', values);
}
export const sendEmails =  (values) => {
    return  axiosClientVer2.post('/api/Interview/send-emails', values);
}
export const updateInterview =  (values) => {
    return  axiosClientVer2.put('/api/Interview/update-phong-van-by-id', values);
}
export const getLichPhongVan =  (values) => {
    return  axiosClientVer2.get('/api/Interview/view-all-lich-phong-van');
}
export const getPhongVan =  (values) => {
    return  axiosClientVer2.get('/api/Interview/view-all-phong-van');
}
export const getCauHoi =  (values) => {
    return  axiosClientVer2.get('/api/CauHoi/get-all');
}
export const showEmails =  (values) => {
    return  axiosClientVer2.get('/api/Interview/show-emails-with-indices');
}
export const showEmailTypes =  (values) => {
    return  axiosClientVer2.get('/api/Interview/show-email-types');
}


