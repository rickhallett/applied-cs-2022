import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'spectre.css';
import './App.css';

import { Layout } from './components/Layout';
import { Algos } from './components/Algos';
import { TestMain } from './components/TestMain';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/algos" element={<Algos />}>
                    <Route path="algos/test" element={<TestMain />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
