import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface DataState {
    data: Intern[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: DataState = {
    data: [],
    status: 'idle',
    error: null,
};

export const fetchInternList = createAsyncThunk('data/fetchData', async (apiUrl: string) => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.log('Error fetching data: ' + error);
    }
});

const InternListSlice = createSlice({
    name: 'internlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInternList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchInternList.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchInternList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            });
    },
});

export default InternListSlice.reducer;
