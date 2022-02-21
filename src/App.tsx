import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { PageNotFound } from './components/PageNotFound';
import { DesignPatternsNavBar } from './components/DesignPatterns/DesignPatternsNavBar';
import { RefactoringNavBar } from './components/Refactoring/RefactoringNavBar';
import { DataStructuresNavBar } from './components/DataStructures/DataStructuresNavBar';
import { ReactReduxNavBar } from './components/ReactRedux/ReactReduxNavBar';
import { CSSNavBar } from './components/CSS/CSSNavBar';

import { DesignPatternsMain } from './components/DesignPatterns/DesignPatternsMain';

import 'spectre.css';
import './App.css';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    path="/design-patterns"
                    element={<DesignPatternsNavBar />}
                >
                    <Route path="home" element={<DesignPatternsMain />} />
                </Route>
                <Route
                    path="/refactoring"
                    element={<RefactoringNavBar />}
                ></Route>
                <Route
                    path="/data-structures"
                    element={<DataStructuresNavBar />}
                ></Route>
                <Route
                    path="/advanced-react-redux"
                    element={<ReactReduxNavBar />}
                ></Route>
                <Route path="/css" element={<CSSNavBar />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Route>
        </Routes>
    );
};

export default App;
