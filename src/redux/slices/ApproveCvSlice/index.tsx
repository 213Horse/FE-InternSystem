import * as apiConfig from '@/utils/ApiConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface User {
    username: string;
    password: string;
}

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
