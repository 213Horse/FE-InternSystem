import * as apiConfig from '@/utils/ApiConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface User {
    username: string;
    password: string;
}
export interface UserRegister {
    [key: string]: string;
}

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        token: '',
        succeeded: '',
        message: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApiLogin.fulfilled, (state, action) => {
            const { accessToken } = action.payload;
            state.token = accessToken;
        });

        builder.addCase(fetchApiRegister.fulfilled, (state, action) => {
            const { succeeded, message } = action.payload;
            state.succeeded = succeeded;
            state.message = message;
        });
    },
});

export const fetchApiLogin = createAsyncThunk('login/fetchApiLogin', async (data: User, { rejectWithValue }) => {
    try {
        const { username, password } = data;
        const res = await apiConfig.post('auth/login', { username, password });
        console.log(res.accessToken);
        return res;
    } catch (error: any) {
        if (error.message === 'Request failed with status code 400') {
            return rejectWithValue('Username không tồn tại!');
        }
    }
});

export const fetchApiRegister = createAsyncThunk(
    'register/fetchApiRegister',
    async (data: UserRegister, { rejectWithValue }) => {
        try {
            const { username, password, hoVaTen, mssv, truong, role, phoneNumber, email } = data;
            const res = await apiConfig.post('auth/register', {
                username,
                password,
                hoVaTen,
                mssv: mssv ? mssv : 'string',
                truong: truong ? truong : 'string', // default value for undefined or null
                role,
                phoneNumber: phoneNumber ? phoneNumber : '0901231231',
                email: email ? email : username + '@gmail.com',
            });
            return res;
        } catch (error: any) {
            if (error.message === 'Request failed with status code 400') {
                return rejectWithValue('Username không tồn tại!');
            }
        }
    },
);

export default loginSlice;
