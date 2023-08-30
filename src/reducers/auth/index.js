import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const postLogin = createAsyncThunk("login", (data) => {
    return axios.post(`http://localhost:3001/login`, data).then((response) => response.data);
});


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user: false,
        token: false,
        error: false,
    },
    reducers: {
        logout: (state, action) => {
            state.user = false;
            state.token = false;
            state.error = false;
        },
    },
    extraReducers: (builder) => {
        // POST LOGIN
        builder.addCase(postLogin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postLogin.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload?.token);
            state.loading = false;
            state.user = action.payload?.user;
            state.token = action.payload?.token;
            state.error = "";
        });
        builder.addCase(postLogin.rejected, (state, action) => {
            state.loading = false;
            state.user = false;
            state.error = action.error.message;
        });
    }
})

export const { logout } = authSlice.actions

export default authSlice.reducer