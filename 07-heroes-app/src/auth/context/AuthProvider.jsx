import { types } from '../types/types';
import { authReducer } from './authReducer';
import { createContext, useReducer } from 'react';

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        loggedIn: !!user,
        user
    };
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, null, init);

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({
            type: types.logout
        });
    };

    const login = (name) => {
        const user = {
            id: 'ABC',
            name
        };
        dispatch({
            type: types.login,
            payload: user
        });

        localStorage.setItem('user', JSON.stringify(user));
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
