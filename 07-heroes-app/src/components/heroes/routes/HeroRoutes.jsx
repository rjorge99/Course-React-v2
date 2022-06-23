import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components/Navbar';
import { DcPage, HeroPage, MarverPage, SearchPage } from '../pages';

export const HeroRoutes = () => {
    return (
        <div className='container'>
            <Navbar />
            <Routes>
                <Route path='marvel' element={<MarverPage />} />
                <Route path='dc' element={<DcPage />} />

                <Route path='search' element={<SearchPage />} />
                <Route path='hero' element={<HeroPage />} />

                <Route path='*' element={<Navigate to='/marvel' />} />
            </Routes>
        </div>
    );
};
