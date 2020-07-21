import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/games'>
                    <li>Games</li>
                </Link>
                <button>Sign Out</button>
            </ul>
        </nav>
    );
}

export default Navbar;