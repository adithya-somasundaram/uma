import React, { useContext } from 'react';
import { Link } from "react-router-dom";

// importing user hook
import { User } from '../User'

function Navbar() {
    const {value,setValue} = useContext(User)

    // style for navbar links aligned right
    const rightSide = {
        marginRight: '0px',
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: '0px'
    };

    // navbar button style
    const buttons = {
        float: 'right',
        padding: '10px',
        fontSize: '100%',
        fontFamily: 'Bahnschrift',
        marginTop: 'auto',
        marginBottom: '10px',
    };

    // 'U.M.A link' style
    const homeButton = {
        padding: '10px',
        fontSize: '200%',
        fontFamily: 'Bahnschrift',
        marginTop: '2px'
    }

    // style for sign out button
    const signOut = {
        float: 'right',
        padding: '10px',
        fontSize: '100%',
        fontFamily: 'Bahnschrift',
        marginTop: 'auto',
        marginBottom: '10px',
        backgroundColor:'Transparent',
        outline:'none',
        border:'none',
        color: '#dadce1',
    }

    // return navbar with sign up/in if no user signed in
    if (value == null || value === '') {
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <Link to='/' style={homeButton}>
                        <li>U.M.A</li>
                    </Link>
                    <Link to='/memory-squares' style={buttons}>
                        <li>Memory Squares</li>
                    </Link>
                    <Link to='/picture-game' style={buttons}>
                        <li>Picture Game</li>
                    </Link>
                    <div style={rightSide}>
                        <Link to='/sign-in' style={buttons}>
                            <li>Sign In</li>
                        </Link>
                        <Link to='/sign-up' style={buttons}>
                            <li>Sign Up</li>
                        </Link>
                    </div>
                </ul>
            </nav>
        );
    }

    // return navbar with 'my profile' and sign out if user signed in
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                    <Link to='/' style={homeButton}>
                        <li>U.M.A</li>
                    </Link>
                    <Link to='/memory-squares' style={buttons}>
                        <li>Memory Squares</li>
                    </Link>
                    <Link to='/picture-game' style={buttons}>
                        <li>Picture Game</li>
                    </Link>
                    <div style={rightSide}>
                        <Link to='/my-profile' style={buttons}>
                            <li>My Profile</li>
                        </Link>
                        <button style={signOut} onClick={() => {
                            setValue(null)
                        }}>
                            <li>Sign Out</li>
                        </button>
                    </div>
                </ul>
        </nav>
    );
}

export default Navbar;