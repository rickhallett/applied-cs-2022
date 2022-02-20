import React from 'react'

export const Header = () => {
    return (
        <header className="navbar p-2">
            <section className="navbar-section">
                <a href="/" className="btn btn-link">
                    Algos
                </a>
                <a href="/" className="btn btn-link">
                    Data
                </a>
                <a href="/" className="btn btn-link">
                    Design Patters
                </a>
                <a href="/" className="btn btn-link">
                    Refactoring
                </a>
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
    )
}
