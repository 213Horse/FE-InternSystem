import * as apiConfig from '@/utils/ApiConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface DataState {
    data: Group[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface DataGroup {
    [key: string]: string;
}

const initialState: DataState = {
    data: [],
    status: 'idle',
    error: null,
};
const GroupSlice = createSlice({
    name: 'Group',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApiGetGroup.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(fetchApiPostGroup.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export const fetchApiGetGroup = createAsyncThunk('login/fetchApiGetGroup', async () => {
    try {
        const res = await apiConfig.get('group-zalos/get');
        console.log(res);
        return res;
    } catch (error: any) {
        if (error.message === 'Request failed with status code 400') {
            console.log('Invalid Data');
        }
    }
});

export const fetchApiPostGroup = createAsyncThunk('login/fetchApiPostGroup', async (data:DataGroup,{ rejectWithValue }) => {
    try {
        const res = await apiConfig.post('group-zalos/create',data);
        console.log(res);
        return res;
    } catch (error: any) {
        if (error.message === 'Request failed with status code 400') {
            return rejectWithValue('invalid Data!');
        }
    }
});

export default GroupSlice;
