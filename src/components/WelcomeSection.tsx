import * as React from 'react';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import {ReactComponent as Logo} from '../images/logo.svg';
import scrollDown from '../images/scrollDown.gif';

export function WelcomeSection(): React.ReactElement {
    return (
        <Box className='welcomeContent'>
            <Box className='title-container'>
                <Logo className='main-page-logo'/>
                <Typography className='subtitle fade-in' color='black' variant='h3'>Liebenfelser Consulting
                    Group</Typography>
                <Typography className='description fade-in' color='black' variant='body1'>Our commitment to
                    excellence in
                    consulting is quantifiable in results: over 500 successful projects, each unique and
                    unrepeatable.
                    With Liebenfelser Consulting Group, we have fulfilled our promises, and we could not be more
                    proud
                    of the outcomes.</Typography>
            </Box>
            <Box className='scroll-down'>
                <img src={scrollDown} alt='Scroll down'/>
            </Box>
        </Box>
    );
}
