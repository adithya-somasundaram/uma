import React, { useContext } from 'react'
import { Link } from "react-router-dom";

// import default picture game and user hook
import DefaultPicGame from './DefaultPicGame'
import { User } from '../User'

function PictureGame() {
    const user = useContext(User)

    // run default game if no user signed in
    if (user.value == null || user.value === '') {
        return (
            <DefaultPicGame />
        );
    }

    // give options to run default game or run/create custom game if user signed in
    return (
        <div className="App-general">
            <h2>Picture Game</h2>
            <ul>
                <Link to='/picture-game/default'>
                    <button className="game-icons">Use Default Game</button>
                </Link>
                <br></br>
                <Link to='/picture-game/create'>
                    <button className="game-icons">Create Custom Game</button>
                </Link>
                <br></br>
                <Link to='/picture-game/custom'>
                    <button className="game-icons">Use Custom Game</button>
                </Link>
            </ul>
        </div>
    );
}

export default PictureGame;