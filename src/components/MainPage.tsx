import * as React from 'react';
import Box from '@mui/material/Box';
import {ReactComponent as Logo} from '../images/logo.svg';
import {Typography} from '@mui/material';

export function MainPage(): React.ReactElement {
    return (
        <body>
            <Box className='welcomeContent'>
                <Box className='title-container'>
                    <Logo className='main-page-logo'/>
                    <Typography className='subtitle fade-in' color='white' variant='h3'>Liebenfelser Consulting
                    Group</Typography>
                    <Typography className='description fade-in' color='white' variant='body1'>Our commitment to excellence in
                    consulting is quantifiable in results: over 500 successful projects, each unique and unrepeatable.
                    With Liebenfelser Consulting Group, we have fulfilled our promises, and we could not be more proud
                    of the outcomes.</Typography>
                </Box>
            </Box>
            <Box className='content'>
                <Box className='section'>
                    <Box className='sectionTitle'>About Us</Box>
                    <Box className='sectionContent'>
                        <Box className='sectionContentText'>
                            <p>
                            We are a group of students from the University of Washington who are passionate about
                            technology and its applications in the real world. We are excited to work on this project
                            and hope to make a positive impact on the world.
                            </p>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </body>
    );
}
