import 'styles/index.css';
import {Header} from './components/Header';
import {MainPage} from './components/MainPage';
import React from 'react';
import Box from '@mui/material/Box';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Footer} from './components/Footer';
import {AGB} from './components/AGB';

export default function App() {
    return (
        <BrowserRouter>
            <Box className="App">
                <Header/>
                <Routes>
                    <Route index element={<MainPage/>}/>
                    <Route path="/agb" element={<AGB/>}/>
                </Routes>
                <Footer/>
            </Box>
        </BrowserRouter>
    );
}
