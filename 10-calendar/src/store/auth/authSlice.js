import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        user: {},
        errorMessage: null
    },
    reducers: {
        onChecking: (state) => {
            state.user = {};
            state.errorMessage = null;
        },
        onLogin: (state, action) => {
            state.status = 'authenticated';
            state.user = action.payload;
            state.errorMessage = null;
        },
        onLogout: (state, action) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = action.payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = null;
        }
    }
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;
export default authSlice;
