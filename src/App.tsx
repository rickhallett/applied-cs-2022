import React from 'react'
import 'spectre.css'
import './App.css'

function App() {
    return (
        <>
            <header className="navbar">
                <section className="navbar-section">
                    <a href="/docs" className="btn btn-link">
                        Docs
                    </a>
                    <a href="/examples" className="btn btn-link">
                        Examples
                    </a>
                </section>
                <section className="navbar-center">
                    {/* <!-- centered logo or brand --> */}
                </section>
                <section className="navbar-section">
                    <a href="/twitter" className="btn btn-link">
                        Twitter
                    </a>
                    <a href="/github" className="btn btn-link">
                        GitHub
                    </a>
                </section>
            </header>
            <main>
                <div className="container">
                    <div className="columns oneline">
                        <div className="column col-6 bg-gray">col-1</div>
                        <div
                            className="divider-vert text-center"
                            data-content="|"
                        ></div>
                        <div className="column col-6 bg-gray">col-2</div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
