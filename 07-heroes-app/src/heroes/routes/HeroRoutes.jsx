import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components/Navbar';
import { DcPage, HeroPage, MarverPage, SearchPage } from '../pages';

export const HeroRoutes = () => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='marvel' element={<MarverPage />} />
                    <Route path='dc' element={<DcPage />} />

                    <Route path='search' element={<SearchPage />} />
                    <Route path='hero' element={<HeroPage />} />
                    <Route path='hero/:id' element={<HeroPage />} />

                    <Route path='/' element={<Navigate to='/marvel' />} />
                </Routes>
            </div>
        </div>
    );
};
