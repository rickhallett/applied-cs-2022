import React from 'react'
import 'spectre.css'
import './App.css'

import { Header } from './components/Header'

function App() {
    return (
        <>
            <Header />
            <main className="container">
                <div className="columns">
                    <div className="column col-3 bg-gray">
                        <ul className="nav">
                            <li className="nav-item">
                                <a href="#">Elements</a>
                            </li>
                            <li className="nav-item active">
                                <a href="#">Layout</a>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a href="#">Flexbox grid</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Responsive</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Navbar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Empty states</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#">Components</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Utilities</a>
                            </li>
                        </ul>
                    </div>
                    <div className="column col-9 bg-gray">
                        <div className="card px-2">
                            <div className="card-header">
                                <div className="card-title h5">
                                    A Card Title
                                </div>
                                <div className="card-subtitle text-gray">
                                    A Card Subtitle
                                </div>
                            </div>
                            <div className="card-body">
                                A note to make a contribution to the world by
                                making tools for the mind that advance
                                humankind.
                            </div>
                            <div className="card-image">
                                <img
                                    src="https://via.placeholder.com/150"
                                    className="img-responsive"
                                    alt=""
                                ></img>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary">
                                    Find out more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
