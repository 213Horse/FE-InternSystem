import * as apiConfig from '@/utils/ApiConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface DataState {
    data: Group[];
    dataById: { [key: string]: string };
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    addGroup:string
    updateGroup:string
}

export interface DataGroup {
    [key: string]: string;
}

const initialState: DataState = {
    data: [],
    dataById:{},
    addGroup:'',
    updateGroup:'',
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
        builder.addCase(fetchApiGetGroupById.fulfilled, (state, action) => {
            state.dataById = action.payload;
        });

        builder.addCase(fetchApiPostGroup.pending, (state, action) => {
            state.status = "loading"
        });
        builder.addCase(fetchApiPostGroup.fulfilled, (state, action) => {
            state.addGroup = action.payload;
            state.status = "succeeded"
        });

        builder.addCase(fetchApiUpdateGroup.pending, (state, action) => {
            state.status = "loading"
        });
        builder.addCase(fetchApiUpdateGroup.fulfilled, (state, action) => {
            state.addGroup = action.payload;
            state.status = "succeeded"
        });
    },
});

export const fetchApiGetGroup = createAsyncThunk('GroupZalo/fetchApiGetGroup', async () => {
    try {
        const res = await apiConfig.get('group-zalos/get');
        
        return res;
    } catch (error: any) {
        if (error.message === 'Request failed with status code 400') {
            console.log('Invalid Data');
        }
    }
});

export const fetchApiPostGroup = createAsyncThunk('GroupZalo/fetchApiPostGroup', async (data:DataGroup,{ rejectWithValue }) => {
    try {
        const res = await apiConfig.post('group-zalos/create',data);
       
        return res;
    } catch (error: any) {
        if (error.message === 'Request failed with status code 400') {
            return rejectWithValue('invalid Data!');
        }
    }
});
export const fetchApiUpdateGroup = createAsyncThunk('GroupZalo/fetchApiUpdateGroup', async (data:DataGroup,{ rejectWithValue }) => {
    try {
        const {id,linkNhom,tenNhom,idMentor} = data
        const res = await apiConfig.put(`group-zalos/update/${id}`,{linkNhom,tenNhom,idMentor});   
        return res;
    } catch (error: any) {
        if (error.message === 'Request failed with status code 400') {
            return rejectWithValue('invalid Data!');
        }
    }
});
export const fetchApiGetGroupById = createAsyncThunk('GroupZalo/fetchApiGetGroupById', async (id:string) => {
    try {
        const res = await apiConfig.get(`group-zalos/get/${id}`);
    
        return res;
    } catch (error: any) {
        if (error.message === 'Request failed with status code 400') {
            console.log('Invalid Data');
        }
    }
});

export default GroupSlice;
