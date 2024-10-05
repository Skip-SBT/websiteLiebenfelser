import 'styles/index.css';
import {Header} from './components/Header';
import {MainPage} from './components/MainPage';
import React from 'react';
import Box from '@mui/material/Box';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Footer} from './components/Footer';
import {AGB} from './components/AGB';
import {ThemeProvider} from '@mui/material';
import theme from './theme';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Box className="App">
                    <Header />
                    <Routes>
                        <Route index element={<MainPage />} />
                        <Route path="/agb" element={<AGB />} />
                    </Routes>
                    <Footer />
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    );
}

