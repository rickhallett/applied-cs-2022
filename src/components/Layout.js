import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header className="navbar p-2">
                <section className="navbar-section">
                    <Link to="/design-patterns" className="btn btn-link">
                        Design Patterns
                    </Link>
                    <Link to="/refactoring" className="btn btn-link">
                        Refactoring
                    </Link>
                    <Link to="/data-structures" className="btn btn-link">
                        Data Structures
                    </Link>
                    <Link to="/advanced-react-redux" className="btn btn-link">
                        React/Redux
                    </Link>
                    <Link to="/css" className="btn btn-link">
                        CSS
                    </Link>
                </section>
                <section className="navbar-center">
                    <a href="/" className="text-primary">
                        <span className="app-title">Applied CS 2022</span>
                    </a>
                </section>
                <section className="navbar-section">
                    <a
                        href="https://www.linkedin.com/in/richardhallett86/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-link"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/rickhallett/applied-cs-2022"
                        className="btn btn-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </section>
            </header>
            <div className="container">
                <div className="columns">
                    <Outlet />
                </div>
            </div>
        </>
    );
};
