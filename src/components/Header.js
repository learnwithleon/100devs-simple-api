import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className="inner-content">
                <div className="brand">
                    <Link to="/"><span>ANI</span>tracker</Link>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Browse</Link>
                        </li>
                        <li>
                            <Link to="/watchlist">Watchlist</Link>
                        </li>
                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}