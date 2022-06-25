import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthProvider';

export const PrivateRoutes = ({ children }) => {
    const { loggedIn } = useContext(AuthContext);
    return loggedIn ? children : <Navigate to='/login' replace />;
};
