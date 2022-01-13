// import logo from './logo.svg';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import './App.css';

import Home from './components/Home/Home'
import Mint from './components/Mint/Mint'
import Cache from './components/Cache/Cache'


function App() {
    return (
        <div className='App'>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mint" element={<Mint />} />
                <Route path="/cache" element={<Cache />} />
                {/* <Route path="/">
                    <Home />
                </Route>
                <Route path="/mint">
                    <Mint />
                </Route> */}
            </Routes>
        </div>
    )
}

export default App;
