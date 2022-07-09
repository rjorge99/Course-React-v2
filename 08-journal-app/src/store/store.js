import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import journalReducer from './journal/journalSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        journal: journalReducer
    }
});
