import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { NavBar, SideBar } from '../components';

const DRAWER_WIDTH = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box
            className='animate__animated animate__fadeIn animate__faster'
            component='main'
            sx={{ display: 'flex' }}>
            <NavBar drawerWidth={DRAWER_WIDTH} />
            <SideBar drawerWidth={DRAWER_WIDTH} />
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};
