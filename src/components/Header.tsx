import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {ReactComponent as Logo} from '../images/logo.svg';
import {useEffect} from 'react';

export function Header(): React.ReactElement {
    // give header css class when scroll
    useEffect(() => {
        const header = document.querySelector('header');
        const muiToolBarRoot = document.querySelector('.MuiToolbar-root');
        const hamburger = document.querySelector('.MuiSvgIcon-root');

        const handleScroll = () => {
            const maxScroll = 60; // The scroll amount at which the header becomes fully opaque
            let scrollPosition = window.scrollY;

            if (scrollPosition > maxScroll) {
                scrollPosition = maxScroll;
            }

            const opacity = scrollPosition / maxScroll;
            header?.style.setProperty('background-color', `rgba(21, 21, 21, ${opacity})`);
            header?.classList.toggle('scrolled', scrollPosition > 40);
            muiToolBarRoot?.classList.toggle('scrolled', scrollPosition > 40);
            hamburger?.classList.toggle('scrolled', scrollPosition > 40);
        };

        window.addEventListener('scroll', handleScroll);

        // Set the transition effect for the background color
        if (header) {
            header.style.transition = 'background-color 0.5s';
        }

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" color={'transparent'}>
                    <Toolbar>
                        <Logo className={'logo'}/>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
}
