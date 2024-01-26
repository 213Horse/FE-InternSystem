import * as apiConfig from '@/utils/ApiConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface User {
    username: string;
    password: string;
}
const loginSlice = createSlice({
    name: 'login',
    initialState: {
        token: {},
        register: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApiLogin.fulfilled, (state, action) => {
            state.token = action.payload;
        });
    },
});

export const fetchApiLogin = createAsyncThunk('login/fetchApiLogin', async (data: User) => {
    try {
        const res = await apiConfig.post('auth/login', data);
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
    }
});

export default loginSlice;
