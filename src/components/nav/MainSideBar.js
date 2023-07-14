import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MlbTeams from "../sports/mlb/MlbTeams";
import {Button, Divider} from "@mui/material";

const drawerWidth = 240;

const MainSideNav = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        DISPLAY SCORES HERE
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <List sx={{ height: '70%' }}>
                    {['MLB', 'NFL', 'NBA', 'NHL'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <List sx={{ height: '30%' }}>
                    <Button variant='contained' sx={{ width: '80%' }}>Login</Button>
                    <Button variant='outlined' sx={{ width: '80%' }}>Sign Up</Button>
                </List>
                <Divider/>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <MlbTeams/>
            </Box>
        </Box>
    );
}

export default MainSideNav