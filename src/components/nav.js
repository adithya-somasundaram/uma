import React from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {
    const rightSide = {
        marginRight: '0px',
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: '0px'
    };

    const buttons = {
        float: 'right',
        padding: '10px',
        fontSize: '100%',
        fontFamily: 'Bahnschrift',
        marginTop: 'auto',
        marginBottom: '10px'
    };

    const homeButton = {
        // float: 'right',
        padding: '10px',
        fontSize: '200%',
        fontFamily: 'Bahnschrift',
    }

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <Link to='/' style= {homeButton}>
                    <li>U.M.A</li>
                </Link>
                <Link to='/memory-squares' style= {buttons}>
                    <li>Memory Squares</li>
                </Link>
                <Link to='/picture-game' style= {buttons}>
                    <li>Picture Game</li>
                </Link>
                <div style={rightSide}>
                    <Link to='/sign-in' style= {buttons}>
                        <li>Sign In</li>
                    </Link>
                    <Link to='/sign-up' style= {buttons}>
                        <li>Sign Up</li>
                    </Link>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;