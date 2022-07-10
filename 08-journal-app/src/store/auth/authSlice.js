import { createSlice } from '@reduxjs/toolkit';
import {
    loginWithEmailPassword,
    logoutFirebase,
    registerUserWithEmailPassword,
    signInWithGoogle
} from '../../firebase/providers';
import { clearNotesLogout } from '../journal/journalSlice';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'no-authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, action) => {
            state.status = 'no-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = action?.payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});

export const checkingAuthentication = (email, password) => async (dispatch) => {
    dispatch(checkingCredentials());
};

export const startGoogleSignIn = () => async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
};

export const startCreatingUserWithEmailAndPassword =
    ({ email, password, displayName }) =>
    async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({
            email,
            password,
            displayName
        });

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, photoURL }));
    };

export const startLoginWithEmailPassword = (email, password) => async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword(email, password);

    if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));
    dispatch(login(result));
};

export const startLogOut = () => async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout());
};

export const { login, logout, checkingCredentials } = authSlice.actions;
export default authSlice.reducer;
