import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../components/auth';
import { HeroRoutes } from '../components/heroes';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/*' element={<HeroRoutes />} />
        </Routes>
    );
};
