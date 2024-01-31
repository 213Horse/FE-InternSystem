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

export const addProject = createAsyncThunk('data/addProject', async (projectData: any) => {
    try {
        const response = await axios.post('https://internsystem.zouzoumanagement.xyz/api/du-ans/create', projectData);
        return response.data; // You might want to return some data if needed
    } catch (error) {
        console.log('Error adding project: ' + error);
        throw error; // Re-throw the error to let the component handle it
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
            })
            .addCase(addProject.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addProject.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                // You may want to update state.data if needed
            })
            .addCase(addProject.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            });
    },
});

export default ProjectSlice.reducer;
