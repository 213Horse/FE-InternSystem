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
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApiLogin.fulfilled, (state, action) => {
            state.token = action.payload;
        });
    },
});

export const fetchApiLogin = createAsyncThunk('login/fetchApiLogin', async (data: User, { rejectWithValue }) => {
    try {
        const { username, password } = data;
        const res = await apiConfig.post('auth/login', { username, password });
        return res.data;
    } catch (error: any) {
        if (error.message === 'Request failed with status code 400') {
            return rejectWithValue('Username không tồn tại!');
        }
    }
});

export default loginSlice;
