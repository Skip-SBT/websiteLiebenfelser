import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, Link, TextField, Typography} from '@mui/material';
import {useState} from 'react';

export function Footer(): React.ReactElement {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');
    const sendData = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <footer>
            <Box className='contact'>
                <Typography className='contact-text' variant={'h4'}>Kontaktieren Sie uns:</Typography>
                <TextField
                    label="Name"
                    id="outlined"
                    value={name}
                    variant="standard"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Email"
                    id="outlined"
                    value={email}
                    variant="standard"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="standard-multiline-static"
                    label="Nachricht"
                    multiline
                    rows={4}
                    value={message}
                    variant="standard"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button onClick={() => sendData()}>Senden</Button>
            </Box>
            <Box className='info'>
                <Typography>© 2024 Alle Rechte vorbehalten</Typography>
                <Link href='https://www.liebenfelsergroup.com/impressum'>Impressum</Link>
                <Link href='https://www.liebenfelsergroup.com/agb'>AGB</Link>
            </Box>
        </footer>
    );
}
