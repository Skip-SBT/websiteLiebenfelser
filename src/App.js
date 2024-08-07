import 'styles/index.css';
import {Header} from './components/Header';
import {MainPage} from './components/MainPage';
import React from 'react';

function App() {
    return (
        <div className="App">
            <Header/>
            <MainPage/>
        </div>
    );
}

export default App;
