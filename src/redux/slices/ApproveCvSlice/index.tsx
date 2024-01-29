import * as apiConfig from '@/utils/ApiConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type IndividualType = {
    mssv: string;
    startDate: string | null;
    endDate: string | null;
    hoTen: string;
    ngaySinh: string;
    sdt: string;
    viTri: any[]; // You might want to replace 'any[]' with a more specific type
    diaChi: string;
    emailCaNhan: string;
    emailTruong: string;
    linkCV: string;
    gioiTinh: string;
    trinhDoTiengAnh: string;
    duAn: any[]; // You might want to replace 'any[]' with a more specific type
    nhomZalo: any[]; // You might want to replace 'any[]' with a more specific type
    truongHoc: string | null;
    status: string;
    createdTime: string;
    createdBy: string | null;
    deletedBy: string | null;
    deletedTime: string | null;
    lastUpdateBy: string | null;
    lastUpdatedTime: string;
};

const ApproveCvSlice = createSlice({
    name: 'ApproveCv',
    initialState: {
        internInfo: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApiGetInternInfo.fulfilled, (state, action) => {
            state.internInfo = action.payload;
        });
    },
});

export const fetchApiGetInternInfo = createAsyncThunk('login/fetchApiGetInternInfo', async () => {
    try {
        const res = await apiConfig.get('interns/get');
        return res.data;
    } catch (error: any) {
        if (error.message === 'Request failed with status code 400') {
            console.log('Invalid Data');
        }
    }
});

export default ApproveCvSlice;
