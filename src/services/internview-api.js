import { axiosClientVer2 } from '../ultils/axios-custom';


export const fetchInterviewSchedule = async () => {
  try {
    const response = await axiosClientVer2.get('api/Interview/view-all-lich-phong-van');
    return response.data;
  } catch (error) {
    throw error;
  }
};
