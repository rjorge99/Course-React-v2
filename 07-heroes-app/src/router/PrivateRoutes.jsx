import { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthProvider';

export const PrivateRoutes = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem('lastPath', `${location.pathname}${location.search}`);
    }, [location]);

    const { loggedIn } = useContext(AuthContext);
    return loggedIn ? children : <Navigate to='/login' replace />;
};
