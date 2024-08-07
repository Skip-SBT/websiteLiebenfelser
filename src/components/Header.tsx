import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as Logo } from '../images/logo.svg';

export function Header(): React.ReactElement {
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color={'transparent'}>
                    <Toolbar>
                        <Logo className={'logo'}/>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
}
