import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MlbTeams from "../sports/mlb/MlbTeams";
import {Button, Divider} from "@mui/material";
import ToolBarGameCards from "./ToolBarGameCards";
import '../theme/App.css'
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

const MainSideNav = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                    backgroundColor: 'transparent',
                    borderBottom: '1px solid white'
                }}
            >
                <Toolbar>
                    <ToolBarGameCards/>
                    <ToolBarGameCards/>
                    <ToolBarGameCards/>
                    <ToolBarGameCards/>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(0,0,0,0.25)',
                        borderColor: 'white',
                        color: 'white'
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    <img src='/GDO-Logo-White.png' alt='GameDay Odds' style={{ maxWidth: '100%', height: 'auto', marginTop: 10 }}/>
                </Toolbar>
                <List sx={{ height: '70%', margin: 'auto' }}>
                    {['MLB', 'NFL', 'NBA', 'NHL'].map((text, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider sx={{ border: '0.5px solid white' }}/>
                <List sx={{ textAlign: 'center', margin: 'auto' }}>
                    <Button variant='contained' sx={{ width: '80%', mb: 2 }}>Login</Button>
                    <Button variant='outlined' sx={{ width: '80%', mb: 2 }}>Sign Up</Button>
                    <Typography fontSize={10}>Copyright © 2023 GamedayOdds</Typography>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />
                <MlbTeams/>
            </Box>
        </Box>
    );
}

export default MainSideNav