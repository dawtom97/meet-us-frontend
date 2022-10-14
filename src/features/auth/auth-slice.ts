import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { DisplayUser } from './models/DisplayUser.interface';
import { Jwt } from './models/Jwt';
import { NewUser } from './models/NewUser';
import authService from './services/auth.service';

interface AsyncState {
    isLoading:boolean;
    isSuccess:boolean;
    isError:boolean;
}

interface AuthState extends AsyncState {
    user?: DisplayUser | null;
    jwt?: Jwt;
    isAuthenticated?: boolean
}

const initialState: AuthState = {
    isLoading:false,//user
    isSuccess:false,//jwt
    isError:false,
    user: null,
    jwt: null,
    isAuthenticated:false
}

export const register = createAsyncThunk(
    'auth/register',
    async(user:NewUser, thunkAPI) =>{
        try {
           return await authService.register(user)
        } catch (error) {
            return thunkAPI.rejectWithValue("Cannot register")
        }
    }
)



export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
       reset: (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
       }
    },
    extraReducers: (builder) => {
        builder
        // REGISTER
        .addCase(register.pending, (state) => {
            state.isLoading = false;
        })
        .addCase(register.fulfilled, (state,action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(register.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
            state.user = null;
        })

    }
});

export default authSlice.reducer

