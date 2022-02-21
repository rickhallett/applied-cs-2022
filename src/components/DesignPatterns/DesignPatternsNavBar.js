import { Link, Outlet } from 'react-router-dom';

export const DesignPatternsNavBar = () => {
    return (
        <>
            <nav className="column col-3 bg-gray">
                <ul className="nav">
                    <a href="/design-patterns/home" className="">
                        SOLID Principles
                    </a>
                    <li className="nav-item">
                        <Link to="srp">Single Responsibility Principle</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="test2">Open/Closed Principle</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="test2">Liskov Substitution Principle</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="test2">Interface Segregation Principle</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="test2">Dependency Inversion Principle</Link>
                    </li>
                    <li className="nav-item active">
                        <a href="/design-patterns/home">Design Patterns</a>
                        <ul className="nav">
                            <a href="/design-patterns/home">
                                Creational Design Patterns
                            </a>
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="#">Factory Method</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Abstract Factory</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Builder</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Prototype</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Singleton</Link>
                                </li>
                            </ul>
                        </ul>
                        <ul className="nav">
                            <a href="/design-patterns/home">
                                Structural Design Patterns
                            </a>
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="#">Adapter</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Bridge</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Composite</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Composite</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Decorator</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Facade</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Flyweight</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Proxy</Link>
                                </li>
                            </ul>
                        </ul>
                        <ul className="nav">
                            <a href="/design-patterns/home">
                                Behavioural Design Patterns
                            </a>
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="#">Chain of Responsibility</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Command</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Iterator</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Mediator</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Memento</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Observer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">State</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Stategy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Template Method</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#">Visitor</Link>
                                </li>
                            </ul>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link to="#">Subtitle</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">Subtitle</Link>
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
