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
            </Box>
            <Box className='content'>
                <Box className='section'>
                    <Box className='section-title'>
                        <Typography variant='h3'>Über uns</Typography>
                    </Box>
                    <Box className='section-description'>
                        <Typography className='section-text' variant='body1'>Die Liebenfelser Group AG besteht aus
                            drei Geschäftsfeldern:
                        <br/>
                        <br/>
                            Consulting: Strategie Entwicklung und Implementierung
                        <br/>
                            Familiy Office: Vermögensberatung<br/>
                            Immobilien: Entwicklung und Verkauf</Typography>
                    </Box>

                    <Box className='section'>
                        <Box className='section-description'>
                            <Typography className='section-text' variant='body1'>Die Liebenfelser Group AG besteht aus
                                drei Geschäftsfeldern:
                            <br/>
                                Consulting: Strategie Entwicklung und Implementierung
                            <br/>
                                Familiy Office: Vermögensberatung<br/>
                                Immobilien: Entwicklung und Verkauf</Typography>
                        </Box>
                        <Box className='section-title'>
                            <Typography variant='h3'>Vision</Typography>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </body>
    );
}
