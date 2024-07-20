import { axiosClientVer2 } from "../ultils/axios-custom";


export const getTask =  () => {
    return  axiosClientVer2.get('/api/Tasks/get-all');
}
export const createTask =  (values) => {
    return  axiosClientVer2.post('/api/Tasks/create', values);
}
export const updateTask =  (values) => {
    return  axiosClientVer2.put('/api/Tasks/update', values);
}
export const deleteTask =  (id) => {
    console.log(id)
    return axiosClientVer2.delete('/api/Tasks/delete', {id: id});
}

export const getTaskReport =  () => {
    return  axiosClientVer2.get('/api/ReportTasks/get-all');
}
export const createTaskReport =  (values) => {
    return  axiosClientVer2.post('/api/ReportTasks/create', values);
}
export const updateTaskReport =  (values) => {
    return  axiosClientVer2.put('/api/ReportTasks/update', values);
}

export const deleteTaskReport =  (values) => {

    return axiosClientVer2.delete('/api/ReportTasks/delete', values);
}