import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthProvider';

export const PublicRoutes = ({ children }) => {
    const { loggedIn } = useContext(AuthContext);
    return loggedIn ? <Navigate to='/' replace /> : children;
};
