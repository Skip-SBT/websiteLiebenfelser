import * as React from 'react';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logoColor from '../images/logo.png';
import { AppDrawer } from './AppDrawer';

export function Header(): React.ReactElement {
    let [isDrawerOpen, setIsDrawerOpen] = useState(false);
    let navigate = useNavigate();

    const MENU_ITEMS = [
        {text: 'Home', link: '/'},
        {text: 'About', link: '/#about'},
        {text: 'Services', link: '/#services'},
        {text: 'Contact', link: '/#contact'},
        {text: 'AGB', link: '/agb'}
    ];

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setIsDrawerOpen(open);
    };

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
            header?.style.setProperty('background-color', `rgba(0, 0, 0, ${opacity})`);
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
                        <img
                            src={logoColor}
                            className='logo'
                            alt="Logo"
                            onClick={() => navigate('/')}
                            style={{ cursor: 'pointer' }}
                        />
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <AppDrawer
                    isOpen={isDrawerOpen}
                    toggleDrawer={toggleDrawer}
                    menuItems={MENU_ITEMS}
                />
            </Box>
        </header>
    );
}
