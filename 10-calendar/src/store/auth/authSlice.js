import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        user: {},
        errorMessage: null
    },
    reducers: {
        onChecknig: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = null;
        },
        onLogin: (state, action) => {
            state.status = 'authenticated';
            state.user = action.payload;
            state.errorMessage = null;
        }
    }
});

export default authSlice;
