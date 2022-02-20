import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header className="navbar p-2">
                <section className="navbar-section">
                    <Link to="/algos" className="btn btn-link">
                        Algos
                    </Link>
                    <Link to="/" className="btn btn-link">
                        Data
                    </Link>
                    <Link to="/" className="btn btn-link">
                        Design Patters
                    </Link>
                    <Link to="/" className="btn btn-link">
                        Refactoring
                    </Link>
                </section>
                <section className="navbar-center">
                    <a href="/" className="text-primary">
                        Applied CS 2022
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
