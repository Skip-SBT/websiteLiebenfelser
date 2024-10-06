import * as React from 'react';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';

export function CompanyInfo(): React.ReactElement {
    return (
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
    );
}
