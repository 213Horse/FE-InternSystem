import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface DataState {
    data: Project[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: DataState = {
    data: [],
    status: 'idle',
    error: null,
};

export const fetchProjects = createAsyncThunk('data/fetchData', async (apiUrl: string) => {
    try {
        const response = await axios.get(apiUrl);
        return response.data.value;
    } catch (error) {
        console.log('Error fetching data: ' + error);
    }
});

const ProjectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            });
    },
});

export default ProjectSlice.reducer;
