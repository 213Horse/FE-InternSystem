import * as apiConfig from '@/utils/ApiConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface DataState {
    data: IndividualType[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: DataState = {
    data: [],
    status: 'idle',
    error: null,
};
const ApproveCvSlice = createSlice({
    name: 'ApproveCv',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApiGetInternInfo.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export const fetchApiGetInternInfo = createAsyncThunk('login/fetchApiGetInternInfo', async () => {
    try {
        const res = await apiConfig.get('interns/get');
        return res;
    } catch (error: any) {
        if (error.message === 'Request failed with status code 400') {
            console.log('Invalid Data');
        }
    }
});

export default ApproveCvSlice;
