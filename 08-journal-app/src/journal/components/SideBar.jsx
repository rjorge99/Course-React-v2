import { TurnedInNot } from '@mui/icons-material';
import {
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material';
import { Box } from '@mui/system';

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}>
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Jorge Reyes
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {[1, 2, 3, 4].map((v) => (
                        <ListItem key={v} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={v} />
                                    <ListItemText
                                        secondary={
                                            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, laboriosam?'
                                        }
                                    />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};
