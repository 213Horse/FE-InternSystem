import * as apiConfig from '@/utils/ApiConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface DataState {
    data: IndividualType[];
    dataByMSSV: { [key: string]: string | string[] };
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: DataState = {
    data: [],
    dataByMSSV: {},
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
        builder.addCase(fetchApiGetInternInfoByMssv.fulfilled, (state, action) => {
            state.dataByMSSV = action.payload;
        });
    },
});

export const fetchApiGetInternInfo = createAsyncThunk('Approve/fetchApiGetInternInfo', async () => {
    try {
        const res = await apiConfig.get('interns/get');
        return res;
    } catch (error: any) {
        if (error.message === 'Request failed with status code 400') {
            console.log('Invalid Data');
        }
    }
});

export const fetchApiGetInternInfoByMssv = createAsyncThunk(
    'Approve/fetchApiGetInternInfoByMssv',
    async (mssv: string) => {
        try {
            const res = await apiConfig.get(`interns/get/${mssv}`);
            return res;
        } catch (error: any) {
            if (error.message === 'Request failed with status code 400') {
                console.log('Invalid Data');
            }
        }
    },
);

export default ApproveCvSlice;
