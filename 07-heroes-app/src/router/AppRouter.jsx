import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroRoutes } from '../heroes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path='/login'
                element={
                    <PublicRoutes>
                        <LoginPage />
                    </PublicRoutes>
                }
            />

            <Route
                path='/*'
                element={
                    <PrivateRoutes>
                        <HeroRoutes />
                    </PrivateRoutes>
                }
            />
        </Routes>
    );
};
