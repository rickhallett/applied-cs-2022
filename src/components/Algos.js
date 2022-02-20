import { Link, Outlet, Route, Routes } from 'react-router-dom';

import { TestMain } from './TestMain';

export const Algos = () => {
    return (
        <>
            <nav className="column col-3 bg-gray">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="algos/test">Test</Link>
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
            </nav>
            <main className="column col-9 bg-gray">
                <div className="card px-2">
                    <Outlet />
                </div>
            </main>
        </>
    );
};
